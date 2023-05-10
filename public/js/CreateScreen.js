//CreateWindows('clase-elemento', 'titulo de la screen')

import makeWindowDraggable from './MoveWindow.js';
const area = document.querySelector('#area');
const createWindow = (nom, titulo) => {
  const window = document.createElement('div');
  window.classList.add(`mac-windows-${nom}`);
  window.classList.add(`mac-windows-${nom}`);
  window.style.position = "absolute";
  window.style.top = "50%";
  window.style.left = "50%";
  window.style.transform = "translate(-50%, -50%)";
  window.style.width = "500px";
  window.style.height = "400px";
  window.style.backgroundColor = "#f5f5f5";
  window.style.border = "1px solid #ccc";
  window.style.borderRadius = "6px";
  window.style.overflow = "hidden";
  window.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
  window.style.display = "flex";
  window.style.flexDirection = "column";

  const titlebar = document.createElement('div');
  titlebar.classList.add(`mac-titlebar`);
  titlebar.classList.add('mac-titlebar');
  titlebar.style.height = "30px";
  titlebar.style.backgroundColor = "#e2e2e2";
  titlebar.style.display = "flex";
  titlebar.style.alignItems = "center";
  titlebar.style.justifyContent = "space-between";
  titlebar.style.padding = "0 8px";

  const buttons = document.createElement('div');
  buttons.classList.add('mac-buttons');
  buttons.style.display = 'flex';
  
  ['close', 'minimize', 'maximize'].forEach(type => {
    const button = document.createElement('div');
    button.classList.add('mac-button', `mac-${type}`);
    button.style.width = '12px';
    button.style.height = '12px';
    button.style.borderRadius = '50%';
    button.style.marginLeft = '6px';
    button.style.border = '1px solid #ccc';
  
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = '#ccc';
    });
  
    if (type === 'close') {
      button.style.backgroundColor = '#ff5f57';
    } else if (type === 'minimize') {
      button.style.backgroundColor = '#ffbd2e';
    } else if (type === 'maximize') {
      button.style.backgroundColor = '#28c940';
    }
  
    buttons.appendChild(button);
  });
    


  const title = document.createElement('div');
  title.classList.add(`mac-title-${nom}`);
  title.textContent = titulo;
  title.style.fontSize = '14px';
  title.style.color = '#5f5f5f';
  title.style.fontWeight = 'bold';

  const content = document.createElement('div');
  content.classList.add(`mac-content-${nom}`);
  content.style.padding = '16px';
  content.style.flexGrow = '1';

  titlebar.appendChild(buttons);
  titlebar.appendChild(title);
  window.appendChild(titlebar);
  window.appendChild(content);
  area.appendChild(window);
  makeWindowDraggable(window);
};
export default createWindow;