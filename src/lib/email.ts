export const openEmail = () => {
  const email = 'imtaz@primelevelrealestate.com';
  const subject = 'Schedule a Consultation';
  const body = 'Hello, I would like to schedule a consultation.';
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(emailUrl, '_blank');
};