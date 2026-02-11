import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData, setStatus, resetForm } from '../store/contactSlice';

const ContactSection = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const dispatch = useDispatch();

  const {
    formData = { name: '', email: '', phone: '', message: '' },
    status,
  } = useSelector((state) => state.contact || {});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setStatus('sending'));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      dispatch(setStatus('success'));
      setTimeout(() => dispatch(resetForm()), 3000);
    } catch {
      dispatch(setStatus('error'));
    }
  };

  const handleInputChange = (field, value) => {
    dispatch(updateFormData({ [field]: value }));
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'adhithyakannan1910@gmail.com',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Chennai, India',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-24 px-6 md:px-12"
      style={{ backgroundColor: 'var(--color-cream)' }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{
              fontFamily: 'var(--font-family-display)',
              color: 'var(--color-espresso)',
            }}
          >
            Let’s Connect
          </h2>

          <div
            className="w-20 h-1 mx-auto rounded-full mb-4"
            style={{
              background:
                'linear-gradient(to right, var(--color-coffee), var(--color-mocha))',
            }}
          />

          <p
            className="text-lg"
            style={{ color: 'var(--color-dark-brown)' }}
          >
            Interested in research, collaborations, or impactful AI systems?
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 space-y-5"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex gap-3 p-5 rounded-2xl border-2"
                style={{
                  backgroundColor: 'var(--color-light-cream)',
                  borderColor: 'var(--color-beige)',
                }}
              >
                <div className="text-2xl">{info.icon}</div>
                <div>
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{
                      fontFamily: 'var(--font-family-display)',
                      color: 'var(--color-espresso)',
                    }}
                  >
                    {info.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--color-dark-brown)' }}
                  >
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-3 space-y-5"
          >
            {['name', 'email', 'phone'].map((field) => (
              <input
                key={field}
                type={
                  field === 'email'
                    ? 'email'
                    : field === 'phone'
                    ? 'tel'
                    : 'text'
                }
                placeholder={
                  field === 'name'
                    ? 'Your Name'
                    : field === 'email'
                    ? 'Your Email'
                    : 'Phone Number (Optional)'
                }
                value={formData[field]}
                onChange={(e) =>
                  handleInputChange(field, e.target.value)
                }
                required={field !== 'phone'}
                className="w-full px-5 py-3 rounded-xl border-2 outline-none text-sm"
                style={{
                  backgroundColor: 'var(--color-light-cream)',
                  borderColor: 'var(--color-beige)',
                  color: 'var(--color-espresso)',
                }}
              />
            ))}

            <textarea
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                handleInputChange('message', e.target.value)
              }
              required
              className="w-full px-5 py-3 rounded-xl border-2 outline-none resize-none text-sm"
              style={{
                backgroundColor: 'var(--color-light-cream)',
                borderColor: 'var(--color-beige)',
                color: 'var(--color-espresso)',
              }}
            />

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 rounded-full text-base font-semibold shadow-xl disabled:opacity-70"
              style={{
                background:
                  'linear-gradient(to bottom right, var(--color-coffee), var(--color-mocha))',
                color: 'var(--color-cream)',
              }}
            >
              {status === 'sending'
                ? 'Sending...'
                : status === 'success'
                ? 'Message Sent ✓'
                : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
