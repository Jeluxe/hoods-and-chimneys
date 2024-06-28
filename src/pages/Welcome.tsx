import { Carousel } from "../components";

import "./Welcome.css"

const Welcome = () => {
  const customers = Array(7).fill(0)
  return (
    <div className="welcome">
      <div className="container">
        <section>
          <Carousel />
        </section>
        <section>
          <h1>הפתרונות שלנו</h1>
          <div className="solutions-container">
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
            <div className="solution">
              <h3>solution</h3>
              <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi sint quas consequatur. Eos dolorum ut in enim commodi dignissimos molestias doloribus nam omnis corrupti nemo suscipit eveniet, minus consequatur inventore.</div>
            </div>
          </div>
        </section>
        <section>
          <h1>מי אנחנו</h1>
          <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur obcaecati commodi vitae itaque tempore eligendi tenetur rerum? Maxime sed illum at autem? Odit eaque nemo cum est autem velit veniam.
            Autem consequatur at consectetur optio accusantium pariatur ipsam natus est! Sequi iusto nobis sunt fuga rerum cupiditate porro vel consectetur corrupti? Ad magni quidem fuga vero velit voluptatem dolorem alias!
            Quo optio expedita corrupti saepe eligendi iure harum fuga corporis accusamus odio dolore perferendis voluptates aut asperiores voluptas doloribus, eaque quisquam aliquid quia eius in blanditiis omnis. Earum, pariatur ullam!
            At quibusdam iure praesentium ad quidem, pariatur blanditiis illo veniam tempora explicabo hic perferendis eos esse, corrupti voluptates! Reiciendis repellendus atque, quia incidunt quibusdam at obcaecati et. Excepturi, sunt amet.
            Officiis quidem non earum accusamus sit aperiam nam nihil atque? Maxime esse magni nemo qui dicta, eum placeat voluptatum obcaecati nisi laborum. Autem quos, tempore culpa obcaecati esse ex similique!
            Aut at dolor alias quos, qui ut quisquam repudiandae odio ducimus, animi minus nostrum debitis iste. Veritatis, maiores corporis amet saepe ad delectus at sequi, dolor odio magni harum. Optio!</div>
        </section>
        <section>
          <h1>לקוחותינו</h1>
          <div className="customers-container" style={{ '--t': "40s" }}>
            <div>
              {customers.map((_, idx) => {
                return <span className="customer">{idx}</span>
              })}
            </div>
            <div>
              {customers.map((_, idx) => {
                return <span className="customer">{idx}</span>
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Welcome