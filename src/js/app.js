document.getElementById("addtask").onclick = function (e){
    e.preventDefault();
    const input = document.getElementById("submit").value

    if (document.getElementById("submit").value.length == 0) {
         document.getElementById("none-text").innerHTML = 'type something...';
    }else{
         document.getElementById("none-text").innerHTML = ' ';
        const ul = document.getElementById("ul")
        ul.innerHTML += `
         <li style="
            list-style: none;
            background: white;
            padding: 1rem 1.25rem;
            margin-bottom: 0.75rem;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: all 0.2s ease;
            border-left: 4px solid #3498db;
            font-weight: 500;
            color: #2c3e50;
            position: relative;
        ">
            <span style="flex-grow: 1;">${input}</span>
            
            <button style="
                background: #f8f9fa;
                border: none;
                color: #e74c3c;
                cursor: pointer;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                font-size: 1.1rem;
                margin-left: 1rem;
            " 
            onclick="this.parentElement.remove()"
            title="Delete task">
                ×
            </button>
        </li>
        `

    }
}



function randomColor() {
      const colors = [
        'rgba(255,255,255,0.2)',
        'rgba(0,150,255,0.25)',
        'rgba(255,0,150,0.2)',
        'rgba(0,255,180,0.2)'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

function createCircle() {
      const container = document.getElementById('bubble-section');
      const circle = document.createElement('div');
      const size = Math.random() * 2 + 1; // 1vw to 3vw
      const left = Math.random() * 100;
      const duration = Math.random() * 5 + 4; // 4s to 9s

      circle.classList.add('circle');
      circle.style.width = size + 'vw';
      circle.style.height = size + 'vw';
      circle.style.left = left + '%';
      circle.style.backgroundColor = randomColor();
      circle.style.animationDuration = duration + 's';

      container.appendChild(circle);

      setTimeout(() => {
        circle.remove();
      }, duration * 1000);
}

    // Generate new circle every 300ms
setInterval(createCircle, 300);