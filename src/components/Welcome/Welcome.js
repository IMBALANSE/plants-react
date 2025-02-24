import React from 'react';

const Welcome = () => {
  return (
    <section class="welcome">
      <div class="welcome-wrapper flex-row">
        <img class="welcome-image" src="assets/img/leafs.png" alt="leafs" />
        <div class="content flex-collum">
          <h1>We grow <span class="green-highlight">plants</span> and give you oxygen</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button class="welcome-button">LEARN MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Welcome