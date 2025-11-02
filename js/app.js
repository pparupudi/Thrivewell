// ThriveWell interactions & chatbot
(function(){
  const toggle = document.getElementById('chat-toggle');
  const chatbot = document.getElementById('chatbot');
  const closeBtn = document.getElementById('chat-close');
  const form = document.getElementById('chat-form');
  const input = document.getElementById('chat-text');
  const log = document.getElementById('chat-log');
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    heroImg.addEventListener('error', () => {
      heroImg.src = 'assets/hero-fallback.svg';
      heroImg.alt = 'ThriveWell hero placeholder';
    });
  }
  const responses = [
    { keywords: ['price','cost','fee','charges'], reply: 'Standard visits start at $25. Insurance coverage varies by plan.' },
    { keywords: ['prescription','medication','rx'], reply: 'Yes, we can prescribe most non‑controlled medications after a consult.' },
    { keywords: ['appointment','book','schedule'], reply: 'You can book instantly from the homepage — tap “Book Appointment”.' },
    { keywords: ['hours','open','24/7','time'], reply: 'We’re available 24/7 for virtual visits.' },
    { keywords: ['specialist','cardio','derma','pediatric','mental'], reply: 'We cover primary care, cardiology, dermatology, pediatrics, and mental health.' },
    { keywords: ['insurance','cover','copay'], reply: 'We accept many insurance plans. Copays depend on your provider.' },
    { keywords: ['secure','hipaa','privacy','safe'], reply: 'We use HIPAA‑compliant tech and industry best practices to protect your data.' }
  ];

  function matchReply(text){
    const t = text.toLowerCase();
    for (const r of responses){
      if (r.keywords.some(k => t.includes(k.toLowerCase()))) return r.reply;
    }
    return 'I can help with appointments, pricing, prescriptions, or security. Try asking: “How much is a visit?”';
  }

  function addMsg(text, who){
    const div = document.createElement('div');
    div.className = `msg ${who}`;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  toggle.addEventListener('click', () => {
    chatbot.style.display = 'block';
    input.focus();
  });
  closeBtn.addEventListener('click', () => {
    chatbot.style.display = 'none';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if(!text) return;
    addMsg(text, 'user');
    input.value = '';
    setTimeout(() => addMsg(matchReply(text), 'bot'), 400);
  });
})();

// Mobile navigation toggle
const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
  // Close panel on link click (mobile)
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
    });
  });
}

// Breadcrumb removed: primary nav only
// (No breadcrumb logic needed)