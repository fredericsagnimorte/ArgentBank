import Account from '../../elements/Account';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUserFirstName, setUserLastName, setUserName } from "../../store";
import { useNavigate } from 'react-router-dom';
import DivInput from "../../elements/DivInput"


function User() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bearer = useSelector((state) => state.user.bearer);
    const userFirstName = useSelector((state) => state.user.userFirstName);
    const userLastName = useSelector((state) => state.user.userLastName);
    const userName = useSelector((state) => state.user.userName);

    const [name, setName] = useState(userName);
    const [isModifyingName, setIsModifyingName] = useState(false);

    useEffect(() => {
        if (!bearer) { navigate("/sign-in.html"); return };

        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearer}`
            },
        })
            .then((response) => response.json())
            .then((data) => {

                dispatch(setUserFirstName(data.body.firstName));
                dispatch(setUserLastName(data.body.lastName));

                if (data.body.userName) {
                    dispatch(setUserName(data.body.userName));
                }
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            });

    }, [bearer, dispatch]);


    useEffect(() => {
        setName(userName || "");
    }, [userName]);

    function handleSave() {

        fetch("http://localhost:3001/api/v1/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${bearer}`
            },
            body: JSON.stringify({
                userName: name.trim() // peut être ""
            })
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setUserName(data.body.userName));
            })
            .catch((error) => {
                console.error("Error updating profile:", error);
            });

        setIsModifyingName(false)

    }

    return (
        <>
            <div className="header">
                {
                    isModifyingName ?
                        (
                            <>
                                <div className="inputs-changing-name">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder={userName ? userName : "username"}
                                    />
                                </div>
                                <div className="buttons-changing-name">
                                    <button className="save-button" onClick={handleSave}>Save</button>
                                    <button className="cancel-button" onClick={() => setIsModifyingName(false)} >Cancel</button>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <h1>Welcome back<br />{userName ? userName : (userFirstName + " " + userLastName)}!</h1>
                                <button className="edit-button" onClick={() => setIsModifyingName(true)} >Edit Name</button>
                            </>
                        )
                }

            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account accountTitle='Argent Bank Checking (x8349)' accountAmount='2,082.79' accountDescription='Available Balance' />

            <Account accountTitle='Argent Bank Savings (x6712)' accountAmount='10,928.42' accountDescription='Available Balance' />

            <Account accountTitle='Argent Bank Credit Card (x8349)' accountAmount='184.30' accountDescription='Current Balance' />
        </>
    )
}

export default User