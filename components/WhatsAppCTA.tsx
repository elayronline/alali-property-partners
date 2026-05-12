"use client"

import { motion } from "framer-motion"

export function WhatsAppCTA() {
  return (
    <section
      id="whatsapp-cta"
      className="section-glow relative overflow-hidden bg-dark-bg px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="animated-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-5xl">
        {/* Gold-bordered card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/30 via-gold/10 to-gold/30 p-[1.5px] shadow-[0_20px_60px_-20px_rgba(201,160,61,0.35)]"
        >
          <div className="relative grid items-center gap-10 rounded-[calc(1.5rem-1.5px)] bg-dark-bg-light/95 px-6 py-10 backdrop-blur-sm sm:px-12 sm:py-14 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            {/* Soft gold glow inside the card */}
            <div
              className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,160,61,0.18), transparent 60%)",
              }}
            />

            {/* Copy */}
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Aside — WhatsApp Broadcast
              </p>
              <h2 className="font-display mt-3 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                Exclusive off-market deals, straight to your phone.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                Our WhatsApp community gets first access to verified, off-market opportunities
                before they reach anyone else.{" "}
                <span className="text-white/80">2.4% sourcing fee</span> (min £3,600, VAT inc.)
                on any deal you proceed with.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
                <a
                  href="https://chat.whatsapp.com/JHY65Dz00z44iH175xUcwS?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-dark-bg shadow-[0_8px_28px_-8px_rgba(201,160,61,0.7)] transition-all hover:bg-gold-light hover:shadow-[0_12px_36px_-8px_rgba(201,160,61,0.85)] sm:text-base"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Join Free
                </a>
                <p className="text-xs text-white/45">
                  Free forever. No spam. Leave anytime.
                </p>
              </div>
            </div>

            {/* Stylised phone-screen visual */}
            <div className="relative mx-auto hidden w-full max-w-xs lg:block">
              <svg
                viewBox="0 0 240 480"
                className="h-auto w-full drop-shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
                role="img"
                aria-label="Stylised WhatsApp deal teaser"
              >
                {/* Phone frame */}
                <rect
                  x="6"
                  y="6"
                  width="228"
                  height="468"
                  rx="32"
                  ry="32"
                  fill="#0a0b0d"
                  stroke="rgba(201,160,61,0.4)"
                  strokeWidth="1.5"
                />
                <rect x="12" y="12" width="216" height="456" rx="26" ry="26" fill="#16171a" />
                {/* Status bar */}
                <text x="120" y="38" fontSize="9" fill="rgba(255,255,255,0.4)" textAnchor="middle" fontFamily="var(--font-raleway), sans-serif">
                  Alali Property Partners
                </text>
                <rect x="20" y="46" width="200" height="0.6" fill="rgba(201,160,61,0.25)" />

                {/* Message 1 */}
                <g transform="translate(20, 70)">
                  <rect x="0" y="0" width="180" height="76" rx="14" ry="14" fill="#1f2227" />
                  <text x="14" y="22" fontSize="9" fontWeight="600" fill="#DEBB5C" fontFamily="var(--font-raleway), sans-serif">
                    ✦ Off-market · CR0
                  </text>
                  <text x="14" y="42" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="var(--font-raleway), sans-serif">
                    3-bed terrace · £325k
                  </text>
                  <text x="14" y="58" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="var(--font-raleway), sans-serif">
                    Indicative gross yield 6.8%
                  </text>
                  <text x="166" y="70" fontSize="7" fill="rgba(255,255,255,0.3)" textAnchor="end" fontFamily="var(--font-raleway), sans-serif">
                    09:14
                  </text>
                </g>

                {/* Message 2 */}
                <g transform="translate(20, 162)">
                  <rect x="0" y="0" width="180" height="76" rx="14" ry="14" fill="#1f2227" />
                  <text x="14" y="22" fontSize="9" fontWeight="600" fill="#DEBB5C" fontFamily="var(--font-raleway), sans-serif">
                    ✦ HMO · BN1
                  </text>
                  <text x="14" y="42" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="var(--font-raleway), sans-serif">
                    6-bed · £540k
                  </text>
                  <text x="14" y="58" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="var(--font-raleway), sans-serif">
                    Indicative gross yield 11.2%
                  </text>
                  <text x="166" y="70" fontSize="7" fill="rgba(255,255,255,0.3)" textAnchor="end" fontFamily="var(--font-raleway), sans-serif">
                    11:48
                  </text>
                </g>

                {/* Message 3 — incoming "tap to view" */}
                <g transform="translate(20, 254)">
                  <rect x="0" y="0" width="180" height="76" rx="14" ry="14" fill="#1f2227" />
                  <text x="14" y="22" fontSize="9" fontWeight="600" fill="#DEBB5C" fontFamily="var(--font-raleway), sans-serif">
                    ✦ Pre-market · OX1
                  </text>
                  <text x="14" y="42" fontSize="9" fill="rgba(255,255,255,0.7)" fontFamily="var(--font-raleway), sans-serif">
                    2-bed flat · £215k
                  </text>
                  <text x="14" y="58" fontSize="8" fill="rgba(255,255,255,0.5)" fontFamily="var(--font-raleway), sans-serif">
                    Indicative gross yield 7.4%
                  </text>
                  <text x="166" y="70" fontSize="7" fill="rgba(255,255,255,0.3)" textAnchor="end" fontFamily="var(--font-raleway), sans-serif">
                    14:02
                  </text>
                </g>

                {/* Typing indicator */}
                <g transform="translate(20, 360)">
                  <circle cx="6" cy="6" r="2" fill="rgba(201,160,61,0.5)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="14" cy="6" r="2" fill="rgba(201,160,61,0.5)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="22" cy="6" r="2" fill="rgba(201,160,61,0.5)">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin="0.4s" repeatCount="indefinite" />
                  </circle>
                </g>

                {/* Bottom message-input bar suggestion */}
                <rect x="20" y="430" width="200" height="24" rx="12" ry="12" fill="#1f2227" />
                <text x="32" y="446" fontSize="8" fill="rgba(255,255,255,0.3)" fontFamily="var(--font-raleway), sans-serif">
                  Type a message…
                </text>

                {/* Notch */}
                <rect x="92" y="0" width="56" height="14" rx="7" ry="7" fill="#0a0b0d" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
