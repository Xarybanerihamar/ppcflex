document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '✕' : '☰';
    });
  }

  const form = document.getElementById('inquiry-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const value = (key) => String(fields.get(key) || '').trim();
    const subjectName = value('company').replace(/[\r\n]+/g, ' ');
    const subject = `New Packaging Inquiry - ${subjectName}`;
    const body = [
      'Hello PPC Flexible,',
      '',
      'I would like to discuss a packaging project.',
      '',
      `Name: ${value('name')}`,
      `Company: ${value('company')}`,
      `Email: ${value('email')}`,
      `Phone: ${value('phone') || 'Not provided'}`,
      `Packaging type: ${value('product') || 'Not specified'}`,
      '',
      'Project details:',
      value('message'),
    ].join('\r\n');

    const mailto = `mailto:info@ppcflexible.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById('form-state');

    if (status) {
      status.replaceChildren();
      status.append('Your email app should open with your inquiry ready. Press Send in your email app to deliver it. If it does not open, ');
      const link = document.createElement('a');
      link.href = mailto;
      link.textContent = 'click here to open your email';
      status.append(link, '.');
      status.classList.add('show');
    }

    // The website itself does not transmit data. The visitor sends the
    // prefilled message from their own email application.
    window.location.href = mailto;
  });
});
