import Link from "next/link";
import PublicNavbar from "@/components/PublicNavbar";
import PublicFooter from "@/components/PublicFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf6f0", color: "#2e3230" }}>
      <PublicNavbar />

      <main className="pt-24 overflow-x-hidden">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="z-10">
              <span
                className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider rounded-full uppercase"
                style={{ color: "#705c30", backgroundColor: "#f8e0a8" }}
              >
                Enterprise-Grade Awareness
              </span>
              <h1
                className="text-5xl md:text-7xl font-extrabold leading-tight mb-8"
                style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
              >
                Modern Security Training for{" "}
                <span style={{ color: "#4a7c59" }}>Modern Teams.</span>
              </h1>
              <p className="text-xl mb-10 leading-relaxed max-w-xl" style={{ color: "#6b6358" }}>
                Build a human firewall with engaging, effective modules designed for the way people
                actually work. Replace compliance checkboxes with true security culture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "#4a7c59", color: "#ffffff" }}
                >
                  Get Started for Free
                </Link>
                <button
                  className="border-2 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:opacity-80"
                  style={{ borderColor: "#4a7c59", color: "#4a7c59" }}
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Overview
                </button>
              </div>
            </div>

            {/* Right — dashboard screenshot */}
            <div className="relative">
              <div
                className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(74,124,89,0.05)" }}
              />
              <div
                className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(112,92,48,0.1)" }}
              />
              <div
                className="relative rounded-2xl p-4 shadow-2xl"
                style={{ backgroundColor: "#f0ece4", border: "1px solid rgba(196,200,188,0.3)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPCKsvjw6U3D1VeiXM_I1WK59ldRcf11nzcRFA8YldeAkmsifWhFnb8HNaYOnBaouAgRNKZIl05TiTVw8SlFZNyjTGJ3-IaH3q8gHnhqJvI6QjQLjRY50t9si6OpOreYxsU_OszWgjRhbJvuBRgJWRz3-wwjgnHRb51IdiQb9jINgiec2JoACyxY_-8FYJrLzo5oozDG_IxQNQFeUkEo9jepn0J8gbMyJRJZfO6LfIG1khavXSt58eXcs2IZBnUjasPYOrbnHXSQw"
                  alt="EdLight security training dashboard"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Social Proof ─────────────────────────────────── */}
        <section
          className="py-16 border-y"
          style={{ backgroundColor: "#f5f1ea", borderColor: "rgba(196,200,188,0.2)" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <p
              className="text-center text-sm font-semibold uppercase tracking-widest mb-12"
              style={{ color: "rgba(107,99,88,0.6)" }}
            >
              Trusted by global security leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaPd3HEBLwQ4wuDd-INxymx5HeApFK30bO_ShQCcDccHX9vrY8rw0xRekxwOJ-KGQkpW3biAVp2EMebXmci-PXudbc0GS74-h9bkR0Kl51kD5E0Aso4oTXx-IpbQFuuo3uyiq9zf1O8sl20fUK7MitG-Rn-kvtR4XOmYb6DgJzRUkbABxVegzeQEsRSkJeDBSOLXr-x8yPvdjHcMzssKmyI56CB983xQpf6kspTXy3JmzyvdcyRTx2ZE0YNH99ycsO2DL0jAbU8ug" alt="" className="h-6 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA96LP4aWyXby6KOvPhPvygL5Eqea-9DAM095ywyIRbjckWUYVlE0nrqezS9pbKSYwDNMOGfvHXFnJUrcO1OkiUhZM_MgZpdzQhciEu16wB5dXLnvTBtOflhDiQkb9aFnWOziIq-vAW64Zs-i-OXRypuZkz6Hac97IVilvh7GCyfOb2XKPhpk_mP9lf8JEYkFutKrr0NJz4BF_OKXzIwfsiMU9z5uSexCblYcEjD5aY4vJQu9JAUupRINcrETfCcg9IxnUSJG_rwUA" alt="" className="h-8 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlWkTWGOOep2apH8xu8yijPHqjk0RRmYOAPTeS_KFZi9IlPGLbTj9wQE9c7Y0mRCG_qmESZIMv7c3lk-GfrLGysr1XRE0Fm2JfHemw2R272FT1ZjTAiAI5AKg8WMvulNtM1xomtmeBuy90fI8L_uOTAjz7btPnT3MBRCNRqbHPAKwDQ_ieDiI35MttkO1u8cZTjXtM4VETzVMx2c2qqWSCSePXYY2YRThKySice2i9dUykD7I84_-fnTX4qlXsOsAXzis7OZRNlbM" alt="" className="h-6 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBug4bhXx1su1gIDvHPB106uzLfgnhrj0MsI6IMN0QHE1FP88dcBWOU_ZpgeQ615aJNMA8yVy7DWaZLTxHt-sKH1B1COUn864KXSumvLUFZUluaEuYMydxSdIK0VkHHmg6VcUNRS8oV3YvX0deyOX5nPvDS_pkqXfeJexd5M2mwg74j_p5v4H5tucqlQJTm4wlO5cjPbcPfctfVdPwtTmUZYX_-91fjTOJAz1gwGYmx-PIt8FFbkr_BX66dvLceeWnFYlcwRqqoD5w" alt="" className="h-6 object-contain" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAekvW8UyC3X3rnQ2lQ1s2h5jmCd5Eam3vnOlHB3iD1GBWZuDmPbo6RbY4rsc9JuxmapXgOqt8KjUkeqy4Ayq_8UnVB-Oa9MlwrLpSHjxBZQTGGAu-NCWbRD4cvBQnleNYVhvAwdGFUJdfeCE9gJyUx3Vldbw5f0FR1Oh87JcF4PJaFYjmJek3gITFp-AyDAivQLvVg51d83LtJGKV5MQshTCJ3tcIJRc0qnnedD1uew0Pk_ldlxi7sVIRl9IX9QjslBwff_rvbwwc" alt="" className="h-6 object-contain" />
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
            >
              Designed for Engagement
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "#6b6358" }}>
              Stop boring your employees. EdLight delivers bite-sized, interactive content that
              actually sticks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "school",
                iconBg: "rgba(74,124,89,0.1)",
                iconColor: "#4a7c59",
                title: "Expert-Led Content",
                description:
                  "Curated curriculum from leading cybersecurity researchers, updated regularly to reflect the current threat landscape.",
                href: "/modules",
              },
              {
                icon: "analytics",
                iconBg: "rgba(112,92,48,0.1)",
                iconColor: "#705c30",
                title: "Real-Time Compliance",
                description:
                  "Automated reporting for SOC2, HIPAA, and GDPR. Track every employee's progress with intuitive, granular dashboards.",
                href: "/progress",
              },
              {
                icon: "phishing",
                iconBg: "rgba(74,124,89,0.1)",
                iconColor: "#4a7c59",
                title: "Simulated Phishing",
                description:
                  "Train employees to spot even the most sophisticated attacks with scenario-based, real-world phishing simulations.",
                href: "/modules/phishing-awareness",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-8 rounded-2xl flex flex-col items-start transition-all hover:shadow-lg"
                style={{
                  backgroundColor: "#f5f1ea",
                  border: "1px solid rgba(196,200,188,0.1)",
                  boxShadow: "0 4px 20px rgba(46,50,48,0.06)",
                }}
              >
                <div
                  className="p-3 rounded-xl mb-6"
                  style={{ backgroundColor: card.iconBg, color: card.iconColor }}
                >
                  <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                </div>
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-literata), Literata, serif" }}
                >
                  {card.title}
                </h3>
                <p className="leading-relaxed mb-6 flex-1" style={{ color: "#6b6358" }}>
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="font-bold inline-flex items-center gap-1 group"
                  style={{ color: "#4a7c59" }}
                >
                  Learn more{" "}
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonial ──────────────────────────────────── */}
        <section
          className="py-24 px-6 overflow-hidden relative"
          style={{ backgroundColor: "#4a7c59" }}
        >
          <div className="absolute top-0 right-0 p-24 opacity-10">
            <span className="material-symbols-outlined text-white" style={{ fontSize: "300px" }}>
              format_quote
            </span>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-full overflow-hidden mb-8"
                style={{ border: "4px solid rgba(255,255,255,0.2)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB44ZOoNPq8HfdQ5IgdXbV8B5PU3Og_nQfvFEFMyc7JjmhWr8Qa9RzpVdIZn11fUPn6lCw2Iun41qxFthJJcUPlOpckfBgKLLtRwC_YpElrKGyNw4lsDfPADq-kNkKE8wIA3FXe7tiWndAP9UArdhnQU8XnJcHNvoD-1G4ocHqvT7pwn6Qmrc7DCZBsp8QmwoLZQea5x9nqpZwmZEENF-HKJ4XvhGlsDhfok4KPQdBq1zhhj1yCoucqEwKOaY_ifmmZ-UHCMFlGbbc"
                  alt="Marcus Thorne"
                  className="w-full h-full object-cover"
                />
              </div>
              <blockquote
                className="text-3xl md:text-4xl text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-literata), Literata, serif" }}
              >
                &ldquo;EdLight didn&rsquo;t just help us pass our audit; it fundamentally shifted
                how our team thinks about security. It&rsquo;s the first time employees are
                actually asking for more training.&rdquo;
              </blockquote>
              <p className="font-bold text-lg" style={{ color: "#d8f0de" }}>
                Marcus Thorne
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>
                Chief Information Security Officer, Lumina Tech
              </p>
            </div>
          </div>
        </section>

        {/* ── Bento Grid ───────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Large tile */}
            <div
              className="md:col-span-2 md:row-span-2 rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden group"
              style={{ backgroundColor: "#f0ece4" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOZxeKucmHmaqMuyWDsMxMFjhTKubSjnwsMTXAqsqj91Oog_6pBLFYpAEmBqJsZRhjbzzrJ5z31S-HA9LAKrbViMNoiwvJIYuSPPuhyGXwyL2isWZwSQ8V3ylfYj0NL3Lc9_WugmWhswR3W_h2yvd_ALkEoBInOWUYAIgJyKCjWZ4SKHlX4KMJlbQelMV6SZYQIi4XIDHwdr59o9TUtgOz1G6Yn4Yak_8nuURUKe9ly1qgURdgghIad68axEastxu2CUA8sGhZ4hw"
                alt="Security concept"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="relative z-10">
                <h4
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-literata), Literata, serif" }}
                >
                  Premium security feel
                </h4>
                <p className="text-lg" style={{ color: "#6b6358" }}>
                  Our interface is designed to reflect the importance of your data. Secure,
                  professional, and uncompromising.
                </p>
              </div>
            </div>

            {/* SOC2 tile */}
            <div
              className="md:col-span-2 rounded-2xl p-8 flex items-center gap-6"
              style={{ backgroundColor: "rgba(196,166,106,0.3)" }}
            >
              <div
                className="p-4 rounded-full"
                style={{ backgroundColor: "rgba(112,92,48,0.2)", color: "#705c30" }}
              >
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <div>
                <h4
                  className="text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-literata), Literata, serif" }}
                >
                  SOC2 Certified
                </h4>
                <p style={{ color: "#6b6358" }}>
                  We maintain the highest standards of data protection for our own platform.
                </p>
              </div>
            </div>

            {/* Teams tile */}
            <div
              className="md:col-span-1 rounded-2xl p-8 flex flex-col justify-between"
              style={{ backgroundColor: "#eae6de" }}
            >
              <span className="material-symbols-outlined text-4xl" style={{ color: "#4a7c59" }}>
                groups
              </span>
              <p className="font-bold" style={{ color: "#2e3230" }}>
                Built for teams of all sizes
              </p>
            </div>

            {/* AI tile */}
            <div
              className="md:col-span-1 rounded-2xl p-8 flex flex-col justify-between"
              style={{
                backgroundColor: "rgba(200,232,208,0.2)",
                border: "1px solid rgba(74,124,89,0.2)",
              }}
            >
              <span className="material-symbols-outlined text-4xl" style={{ color: "#4a7c59" }}>
                auto_awesome
              </span>
              <p className="font-bold" style={{ color: "#2e3230" }}>
                AI-Powered learning paths
              </p>
            </div>
          </div>
        </section>

        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="py-24 px-6 text-center">
          <div
            className="max-w-4xl mx-auto rounded-3xl p-12 md:p-20 shadow-xl"
            style={{
              backgroundColor: "#e4e0d8",
              border: "1px solid rgba(196,200,188,0.3)",
            }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: "var(--font-literata), Literata, serif", color: "#2e3230" }}
            >
              Ready to secure your human layer?
            </h2>
            <p className="text-xl mb-10" style={{ color: "#6b6358" }}>
              Join 2,000+ companies building a stronger security culture with EdLight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: "#4a7c59", color: "#ffffff" }}
              >
                Get Started for Free
              </Link>
              <button
                className="px-10 py-4 rounded-xl font-bold text-lg border transition-all hover:opacity-80"
                style={{
                  backgroundColor: "#faf6f0",
                  color: "#2e3230",
                  borderColor: "#c4c8bc",
                }}
              >
                Talk to Sales
              </button>
            </div>
            <p className="mt-8 text-sm" style={{ color: "rgba(107,99,88,0.6)" }}>
              No credit card required. Cancel anytime.
            </p>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}

