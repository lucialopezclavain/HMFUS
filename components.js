// Shared nav component
function getNHSHeader(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'patients.html', label: 'For Patients' },
    { href: 'professionals.html', label: 'For Healthcare Professionals' },
    { href: 'contact.html', label: 'Contact Us' },
  ];
  const navLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <header class="nhs-header">
    <div class="nhs-header__inner">
      <a href="index.html" class="nhs-header__org-name">
        Hydatidiform Mole Follow-Up Service
        <span>Ninewells Hospital, Dundee &middot; NHS Scotland</span>
      </a>
      <div class="nhs-header__contact">
        <strong>Tel:</strong> 01382 632748<br>
        <a href="mailto:TAY.hmolescotland@nhs.scot">TAY.hmolescotland@nhs.scot</a>
      </div>
    </div>
  </header>
  <nav class="nhs-nav">
    <div class="nhs-nav__inner">${navLinks}</div>
  </nav>`;
}

function getNHSFooter() {
  return `
  <footer class="nhs-footer">
    <div class="nhs-footer__inner">
      <div>
        <h4>HMFUS Scotland</h4>
        <p>Hydatidiform Mole Follow-Up Service<br>
        Ninewells Hospital, Dundee, DD1 9SY</p>
        <p>Tel: 01382 632748</p>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:TAY.hmolescotland@nhs.scot">TAY.hmolescotland@nhs.scot</a>
        <a href="mailto:tay.hmfuslaboratory@nhs.scot">tay.hmfuslaboratory@nhs.scot</a>
        <a href="mailto:tay.molecouns@nhs.scot">tay.molecouns@nhs.scot (Counselling)</a>
      </div>
      <div>
        <h4>Related Services</h4>
        <a href="https://www.nhsinform.scot/illnesses-and-conditions/pregnancy-and-childbirth/losing-a-baby/molar-pregnancy/" target="_blank">NHS Inform</a>
        <a href="https://www.nhs.uk/conditions/molar-pregnancy/" target="_blank">NHS.uk</a>
        <a href="https://www.macmillan.org.uk/" target="_blank">Macmillan Cancer Support</a>
        <a href="https://mymolarpregnancy.com/" target="_blank">MyMolarPregnancy.com</a>
      </div>
      <div>
        <h4>Service Hours</h4>
        <p>Monday – Friday<br>8:00am – 5:00pm</p>
        <p>Closed on public holidays.<br>For urgent enquiries outside hours, contact the Clinical Scientist in advance.</p>
      </div>
    </div>
    <div class="nhs-footer__bottom">
      &copy; ${new Date().getFullYear()} Hydatidiform Mole Follow-Up Service, NHS Tayside. All rights reserved.
    </div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', function() {
  const headerEl = document.getElementById('nhs-header-placeholder');
  const footerEl = document.getElementById('nhs-footer-placeholder');
  if (headerEl) headerEl.innerHTML = getNHSHeader(headerEl.dataset.page);
  if (footerEl) footerEl.innerHTML = getNHSFooter();
});
