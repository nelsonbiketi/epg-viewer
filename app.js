fetch('guide.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('epg-list');
    container.innerHTML = '';
    data.forEach(channel => {
      const div = document.createElement('div');
      div.className = 'program';
      div.innerHTML = `
        <div class="channel">${channel.channel}</div>
        <div class="time">${channel.time}</div>
        <div class="title">${channel.title}</div>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    document.getElementById('epg-list').innerText = 'Failed to load EPG.';
  });
