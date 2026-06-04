import React, { useState } from 'react'

// ─── EDIT YOUR INFO HERE ──────────────────────────────────────────────────────
type ColorVariant = 'accent' | 'green' | 'muted'

interface SkillGroup {
  category: string
  color: ColorVariant
  pills: string[]
}

const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend',
    color: 'accent',
    pills: ['React', 'TypeScript', 'HTML · CSS', 'Tailwind', 'ShadCN', 'Vite'],
  },
  {
    category: 'AI & Vibe coding',
    color: 'green',
    pills: ['Claude', 'ChatGPT', 'Cursor', 'Prompt engineering', 'v0 · Bolt'],
  },
  {
    category: 'Tooling',
    color: 'muted',
    pills: ['Git · GitHub', 'Figma', 'VS Code', 'Vercel'],
  },
  {
    category: 'Backend basics',
    color: 'muted',
    pills: ['Node.js', 'REST APIs', 'Supabase'],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const categoryColor: Record<ColorVariant, string> = {
  accent: 'var(--accent)',
  green:  'var(--green)',
  muted:  'var(--muted)',
}

const Skills: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="skills" style={{ padding: 'clamp(4rem, 8vw, 7rem) 0' }}>
      <div style={{ marginBottom: '2.75rem' }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '0.72rem',
          fontWeight: 700,
          color: 'var(--green)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '0.5rem',
        }}>
          02 — Skills
        </span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1,
        }}>
          What I know
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
        gap: '1.25rem',
      }}>
        {SKILLS.map((group, i) => (
          <div
            key={group.category}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderRadius: '14px',
              padding: '1.5rem',
              border: hovered === i
                ? '1.5px solid var(--accent)'
                : '1.5px solid rgba(26,23,20,0.09)',
              background: 'var(--bg1)',
              transform: hovered === i ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
          >
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: categoryColor[group.color],
              marginBottom: '0.75rem',
            }}>
              {group.category}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {group.pills.map(pill => (
                <span
                  key={pill}
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.22rem 0.6rem',
                    borderRadius: '6px',
                    background: 'rgba(26,23,20,0.06)',
                    color: 'var(--muted)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
