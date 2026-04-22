import Account from '../../elements/Account';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setUserFirstName, setUserLastName } from "../../store";
import { useNavigate } from 'react-router-dom';
import DivInput from "../../elements/DivInput"


function User() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const bearer = useSelector((state) => state.user.bearer);
    const userFirstName = useSelector((state) => state.user.userFirstName);
    const userLastName = useSelector((state) => state.user.userLastName);

    const [firstName, setFirstName] = useState(userFirstName);
    const [lastName, setLastName] = useState(userLastName);
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
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            });

    }, [bearer, dispatch]);

    function handleSave() {
        console.log("changement du nom");
        setIsModifyingName(false);
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
                                        id="userFirstName"
                                        value={userFirstName} onChange={(e) => { dispatch(setUserFirstName(e.target.value)) }}
                                    />
                                    <input
                                        type="text"
                                        id="userLastName"
                                        value={userLastName}
                                        onChange={(e) => { dispatch(setUserLastName(e.target.value)) }}
                                    />
                                </div>
                                <div className="buttons-changing-name">
                                    <button className="Save-button" onClick={handleSave}>Save</button>
                                    <button className="cancel-button" onClick={() => setIsModifyingName(false)} >Cancel</button>
                                </div>
                            </>
                        )
                        :
                        (
                            <>
                                <h1>Welcome back<br />{userFirstName + " " + userLastName}!</h1>
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