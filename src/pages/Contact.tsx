export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p style={{ color: '#4b5563', maxWidth: 520 }}>
        I’m open to opportunities to collaborate, learn, and contribute to AI
        projects. Feel free to get in touch.
      </p>
      <form
        style={{ display: 'grid', gap: 12, maxWidth: 520 }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          placeholder="Name"
          required
          style={{ padding: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
        />
        <input
          type="email"
          placeholder="Email"
          required
          style={{ padding: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
        />
        <textarea
          placeholder="Message"
          rows={5}
          required
          style={{ padding: 12, borderRadius: 8, border: '1px solid #e5e7eb' }}
        />
        <button type="submit" style={{ padding: '10px 14px', borderRadius: 8 }}>
          Send
        </button>
      </form>
    </section>
  )
}
