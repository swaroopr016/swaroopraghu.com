import React from "react";

function BusinessAbout(){
  return (
    <section id="about" className="mb-12">
      <div className="card rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">About the Venture</h2>
        <div className="grid md:grid-cols-2 gap-5 text-muted">
          <div className="space-y-3">
            <p>
              I’m building towards opportunities in the <b>agro industry</b>,
              tech-enabled operations, supply chain visibility, and data-driven decisions
              that lift margins for growers and vendors.
            </p>
            <p>
              This space is <b>under construction</b> as I validate models, partners,
              and the first pilot. Alongside this, I’m running several other projects and engineering consulting.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            <BizStat label="Focus" value="Agro / Supply Chain" />
            <BizStat label="Stage" value="Research & Pilot" />
            <BizStat label="Edge" value="OT + Software + Data" />
            <BizStat label="Contact" value="Open for partners" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BizStat({ label, value }){
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="text-xs text-muted">{label}</div>
      <div className="text-lg font-semibold mt-1">{value}</div>
    </div>
  );
}

export default function Business(){
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-black mb-6">Business</h1>
      <p className="text-muted max-w-2xl">
        Ventures, content, and future plays — from blockchain education to fitness products
        and engineering services.
      </p>

      {/* About Section */}
      <BusinessAbout />

      {/* Ventures */}
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        <div className="card p-5 rounded-2xl">
          <h3 className="font-bold">Crypto Conviction</h3>
          <p className="text-sm text-muted mt-1">Educational content & analysis.</p>
        </div>
        <div className="card p-5 rounded-2xl">
          <h3 className="font-bold">Coaching</h3>
          <p className="text-sm text-muted mt-1">Elite aesthetics program.</p>
        </div>
        <div className="card p-5 rounded-2xl">
          <h3 className="font-bold">Consulting</h3>
          <p className="text-sm text-muted mt-1">Electronics + software projects.</p>
        </div>
      </div>
    </main>
  );
}
