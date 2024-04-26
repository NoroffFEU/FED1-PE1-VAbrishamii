const mainContent = document.createElement('header');
mainContent.innerHTML = "";
const jsx = `
<div class="logo">
      <h1>Trip</h1>
    </div>
    <nav>
      <div class="navbar">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact us</li>
        </ul>
      </div>
      <div class="icon">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-user"></i>
      </div>
    </nav>
`;
mainContent.innerHTML += jsx;