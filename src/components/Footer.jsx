const Footer = () => {
  return (
    <footer
      className="py-8 px-8 md:px-16"
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-cream)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          © 2026 Adhithya Kannan. Built with intent and curiosity.
        </p>
        <div className="flex gap-8">
          <a
            href="#privacy"
            className="transition-colors"
            style={{ color: 'var(--color-beige)' }}
            onMouseEnter={(e) =>
              (e.target.style.color = 'var(--color-cream)')
            }
            onMouseLeave={(e) =>
              (e.target.style.color = 'var(--color-beige)')
            }
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="transition-colors"
            style={{ color: 'var(--color-beige)' }}
            onMouseEnter={(e) =>
              (e.target.style.color = 'var(--color-cream)')
            }
            onMouseLeave={(e) =>
              (e.target.style.color = 'var(--color-beige)')
            }
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
