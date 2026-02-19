
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    // Ensure credentials are correct
    const serviceId = 'service_1af4bzh';
    const templateId = 'template_vasciy8';
    const publicKey = '210IbNC6Em2RBxpn_';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email
      }
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        const errText = await response.text();
        setStatus('ERROR');
        setErrorMessage(errText || 'Failed to send message. Please check your connection.');
      }
    } catch (error) {
      setStatus('ERROR');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section-padding relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full border border-lavender-200 bg-lavender-50 text-xs font-bold text-lavender-600 mb-6">
              Connect
            </div>
            <h3 className="text-5xl font-extrabold text-brand-dark mb-8 tracking-tighter leading-tight">
              Let's Build the <br /> <span className="text-gradient">Future Together</span>
            </h3>
            <p className="text-brand-gray text-lg font-medium mb-12 max-w-md leading-relaxed">
              Whether it's a job opportunity or a collaboration query, I'm always available for a chat.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Direct Channel</p>
                <a href="mailto:jstanshika1402@gmail.com" className="text-brand-dark hover:text-lavender-600 transition-colors font-bold">jstanshika1402@gmail.com</a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Voice</p>
                <a href="tel:7305274747" className="text-brand-dark hover:text-lavender-600 transition-colors font-bold">+91 73052 74747</a>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Presence</p>
                <p className="text-brand-dark font-bold">Chennai, India</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Socials</p>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/in/tanshika-j-s-241a85296/" target="_blank" className="text-brand-dark hover:text-lavender-600 transition-colors font-bold">LinkedIn</a>
                  <a href="https://github.com/tanshika225" className="text-brand-dark hover:text-lavender-600 transition-colors font-bold">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-10 rounded-[2.5rem]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Full Name</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-lavender-500 focus:ring-4 focus:ring-lavender-500/10 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Email Address</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-lavender-500 focus:ring-4 focus:ring-lavender-500/10 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Subject</label>
                  <input 
                    type="text" name="subject" value={formData.subject} onChange={handleChange} required
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-lavender-500 focus:ring-4 focus:ring-lavender-500/10 outline-none transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-2">Message</label>
                  <textarea 
                    name="message" value={formData.message} onChange={handleChange} required rows={4}
                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:border-lavender-500 focus:ring-4 focus:ring-lavender-500/10 outline-none transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" disabled={status === 'LOADING'}
                  className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                    status === 'LOADING' 
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed' 
                    : 'bg-lavender-600 text-white hover:bg-lavender-700 shadow-xl shadow-lavender-500/20 active:scale-95'
                  }`}
                >
                  {status === 'LOADING' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>

                {status === 'SUCCESS' && (
                  <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-600 text-center text-xs font-bold uppercase tracking-widest animate-fade-in-up">
                    Message Sent Successfully!
                  </div>
                )}
                
                {status === 'ERROR' && (
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-center text-xs font-bold leading-relaxed animate-fade-in-up">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
