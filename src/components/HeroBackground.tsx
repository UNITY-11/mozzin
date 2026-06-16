export default function HeroBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-80 mix-blend-lighten"
        style={{
          background: 'linear-gradient(to right, #000318, #0033cc, #00eeff)',
        }}
      />
      <div
        className="absolute inset-0 opacity-100 mix-blend-overlay"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  )
}
