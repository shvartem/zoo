const ws = new WebSocket('ws://localhost:3000/chat/');
const { chatForm } = document;
const messageContainer = document.querySelector('.message-container');
const messageTemplate = document
  .getElementById('message-template')
  .content.querySelector('.message');

function dispatchEvent(message) {
  const parsed = JSON.parse(message.data);

  function createMessage(author, text) {
    console.log(author, text);
    const messageElement = messageTemplate.cloneNode(true);

    const authorElement = messageElement.querySelector('.message__author');
    const textElement = messageElement.querySelector('.message__text');

    authorElement.textContent = author;
    textElement.textContent = text;

    chatForm.text.value = '';
    messageContainer.append(messageElement);
  }

  switch (parsed.type) {
    case 'ADDED_MESSAGE':
      createMessage(parsed.payload.author, parsed.payload.text);
      break;

    default:
      console.error('Something error');
      break;
  }
}

ws.onmessage = dispatchEvent;

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const {
    author: { value: author },
    text: { value: text },
  } = e.target;

  console.log(author);

  ws.send(
    JSON.stringify({
      type: 'NEW_MESSAGE',
      payload: { author, text },
    }),
  );
});
