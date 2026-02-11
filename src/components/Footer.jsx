const Footer = () => {
  return (
    <footer
      className="py-6 px-6 md:px-12"
      style={{
        backgroundColor: 'var(--color-espresso)',
        color: 'var(--color-cream)',
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-xs">
          © 2026 Adhithya Kannan. Built with intent and curiosity.
        </p>

        <div className="flex gap-6 text-sm">
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
