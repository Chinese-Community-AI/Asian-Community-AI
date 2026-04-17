"use client";

export function FooterNewsletter() {
  return (
    <form
      className="flex flex-col gap-3 self-end"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="firstName"
          aria-label="First name"
          placeholder="First Name"
          className="rounded-pill border border-cream/25 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none"
        />
        <input
          name="lastName"
          aria-label="Last name"
          placeholder="Last Name"
          className="rounded-pill border border-cream/25 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="email"
          type="email"
          aria-label="Email address"
          placeholder="Email Address"
          className="flex-1 rounded-pill border border-cream/25 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/50 focus:border-cream focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-pill bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-mustard"
        >
          Subscribe
        </button>
      </div>
      <p className="text-xs text-cream/55">
        By subscribing you agree to our Privacy Policy.
      </p>
    </form>
  );
}
