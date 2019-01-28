const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i + 1}`];
});

// cta
const ctaH1 = document.querySelector('section.cta h1');
const ctaBtn = document.querySelector('section.cta button');
const ctaImg = document.querySelector('#cta-img');

ctaH1.textContent = siteContent.cta.h1;
ctaBtn.textContent = siteContent.cta.button;
ctaImg.src = siteContent.cta["img-src"];

// main content, top
const mainContent = siteContent["main-content"]
const topContentAHead = document.querySelector('.top-content > div:nth-child(1) h4');
const topContentAText = document.querySelector('.top-content > div:nth-child(1) p');
const topContentBHead = document.querySelector('.top-content > div:nth-child(2) h4');
const topContentBText = document.querySelector('.top-content > div:nth-child(2) p');

topContentAHead.textContent = mainContent["features-h4"];
topContentAText.textContent = mainContent["features-content"];
topContentBHead.textContent = mainContent["about-h4"];
topContentBText.textContent = mainContent["about-content"];

// main content, img
const mainContentImg = document.querySelector('#middle-img');

mainContentImg.src = mainContent["middle-img-src"];

// main content, bottom
const bottomContentAHead = document.querySelector('.bottom-content > div:nth-child(1) h4')
const bottomContentAText = document.querySelector('.bottom-content > div:nth-child(1) p')
const bottomContentBHead = document.querySelector('.bottom-content > div:nth-child(2) h4')
const bottomContentBText = document.querySelector('.bottom-content > div:nth-child(2) p')
const bottomContentCHead = document.querySelector('.bottom-content > div:nth-child(3) h4')
const bottomContentCText = document.querySelector('.bottom-content > div:nth-child(3) p')

bottomContentAHead.textContent = mainContent["services-h4"];
bottomContentAText.textContent = mainContent["services-content"];
bottomContentBHead.textContent = mainContent["product-h4"];
bottomContentBText.textContent = mainContent["product-content"];
bottomContentCHead.textContent = mainContent["vision-h4"];
bottomContentCText.textContent = mainContent["vision-content"];

// contact
const contactHead = document.querySelector('section.contact h4')
const contactPA = document.querySelector('section.contact p:nth-of-type(1)')
const contactPB = document.querySelector('section.contact p:nth-of-type(2)')
const contactPC = document.querySelector('section.contact p:nth-of-type(3)')

contactHead.textContent = siteContent.contact["contact-h4"];
contactPA.textContent = siteContent.contact.address;
contactPB.textContent = siteContent.contact.phone;
contactPC.textContent = siteContent.contact.email;

// footer
const footerP = document.querySelector('footer p');

footerP.textContent = siteContent.footer.copyright;

// stretch, event listener
// click logo to toggle nav link color and additional nav links
logo.addEventListener('click', () => {
  const navEl = document.querySelector('nav');
  navLinks = document.querySelectorAll('nav a');

  if (navLinks.length === 8) {
    navLinks[0].remove();
    navLinks[7].remove();

    navLinks.forEach((link) => {
      link.removeAttribute('style');
    });
    return;
  }

  const linkToAppend = document.createElement('a');
  const linkToPrepend = document.createElement('a');
  linkToPrepend.textContent = 'Home'
  linkToPrepend.href = '#';
  linkToAppend.textContent = 'Blog';
  linkToAppend.href = '#';
  navEl.appendChild(linkToAppend);
  navEl.prepend(linkToPrepend);
  
  navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.style.color = 'green';
  });
});