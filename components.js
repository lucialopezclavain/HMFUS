function getNHSHeader(activePage) {
  const dropdowns = {
    'index.html': [
      { href: 'index.html#overview',        label: 'Overview' },
      { href: 'index.html#what-we-offer',   label: 'What We Offer' },
      { href: 'index.html#about-molar',     label: 'About Molar Pregnancy' },
      { href: 'index.html#scottish-centre', label: 'The Scottish Centre' },
      { href: 'index.html#gtd',             label: 'About GTD' },
    ],
    'patients.html': [
      { href: 'patients.html#about',           label: 'About Molar Pregnancy' },
      { href: 'patients.html#followup',        label: 'Follow-Up' },
      { href: 'patients.html#treatment',       label: 'Further Treatment' },
      { href: 'patients.html#counselling',     label: 'Counselling' },
      { href: 'patients.html#links',           label: 'Helpful Links' },
      { href: 'patients.html#faqs',            label: 'FAQs' },
    ],
    'professionals.html': [
      { href: 'professionals.html#background',   label: 'Background' },
      { href: 'professionals.html#pathology',   label: 'Pathology Referral and Diagnosis' },
      { href: 'professionals.html#registration',label: 'Patient Registration' },
      { href: 'professionals.html#hcg',         label: 'hCG Follow-up Surveillance' },
      { href: 'professionals.html#chemo',       label: 'Chemotherapy' },
      { href: 'professionals.html#post-chemo',  label: 'Post-Chemotherapy' },
      { href: 'professionals.html#research',    label: 'Research' },
    ],
    'contact.html': [
      { href: 'contact.html#get-in-touch', label: 'Get in Touch' },
      { href: 'contact.html#address',      label: 'Address' },
      { href: 'contact.html#other-centres',label: 'Other UK Centres' },
    ],
  };

  const pages = [
    { href: 'index.html',         label: 'Home' },
    { href: 'patients.html',      label: 'Patients' },
    { href: 'professionals.html', label: 'Healthcare Professionals' },
    { href: 'contact.html',       label: 'Contact Us' },
  ];

  const navLinks = pages.map(p => {
    const items = dropdowns[p.href] || [];
    const dropHtml = items.map(d =>
      `<a href="${d.href}">${d.label}</a>`
    ).join('');
    return `<div class="nhs-nav__item${activePage === p.href ? ' active' : ''}">
      <a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label} <span class="nav-arrow">▾</span></a>
      <div class="nhs-nav__dropdown">${dropHtml}</div>
    </div>`;
  }).join('');

  return `
  <div class="nhs-hero-banner">
    <div class="nhs-hero-banner__inner">
      <div class="nhs-hero-banner__logo">
        <a href="index.html"><img src="images/nhs_tayside_logo.png" alt="NHS Tayside logo"></a>
      </div>
      <div class="nhs-hero-banner__text">
        <a href="index.html" class="nhs-hero-banner__title">Hydatidiform Mole Follow-Up Service (HMFUS)</a>
        <p>Scottish National Centre &middot; Ninewells Hospital, Dundee &middot; NHS Scotland</p>
      </div>
      <div class="nhs-hero-banner__contact">
        <strong>&#x1F4DE; 01382 632748</strong><br>
        <a href="mailto:TAY.hmolescotland@nhs.scot">TAY.hmolescotland@nhs.scot</a><br>
        Mon&ndash;Fri, 8am&ndash;5pm
      </div>
      <div class="nhs-hero-banner__logo-right">
        <img src="images/hmfus_logo.png" alt="HMFUS Scotland logo">
      </div>
    </div>
  </div>
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
        <p>Hydatidiform Mole Follow-Up Service<br>Ninewells Hospital, Dundee, DD1 9SY</p>
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
        <a href="https://www.nhs.uk/conditions/molar-pregnancy/" target="_blank">NHS.UK</a>
        <a href="https://www.macmillan.org.uk/" target="_blank">Macmillan Cancer Support</a>
        <a href="https://mymolarpregnancy.com/" target="_blank">MyMolarPregnancy.com</a>
      </div>
      <div>
        <h4>Service Hours</h4>
        <p>Monday – Friday<br>9:00am – 4:00pm</p>
        <p>Closed on public holidays.</p>
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
