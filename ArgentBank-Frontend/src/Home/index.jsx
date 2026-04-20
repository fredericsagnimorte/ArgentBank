import Feature_item from '../elements/Feature_Item'

function Home() {
  return (
    <>
      <div class="hero">
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section class="features">
        <h2 class="sr-only">Features</h2>

        <Feature_item imgsrc="./img/icon-chat.png" title="You are our #1 priority" content="Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes." />

        <Feature_item imgsrc="./img/icon-money.png" title="More savings means higher rates" content="The more you save with us, the higher your interest rate will be!" />

        <Feature_item imgsrc="./img/icon-security.png" title="Security you can trust" content="We use top of the line encryption to make sure your data and money
            is always safe." />

      </section>
    </>
  )
}

export default Home
