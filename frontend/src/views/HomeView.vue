<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects'
import ImageFallback from '../components/ImageFallback.vue'

const form = ref({
  name: '',
  email: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  website: ''
})

const status = ref('')

const services = [
  {
    title: 'Remote NOC Monitoring',
    summary: 'Monitoring, alert triage, incident escalation, uptime checks, and operational reporting.',
    bestFor: 'MSPs, ISPs, SaaS teams, distributed businesses',
    cta: 'Request NOC Support'
  },
  {
    title: 'After-Hours MSP Support',
    summary: 'Remote alert response and first-line troubleshooting while your U.S. team is offline.',
    bestFor: 'U.S. MSPs needing overnight coverage',
    cta: 'Discuss Coverage'
  },
  {
    title: 'Network Troubleshooting',
    summary: 'WAN, VLAN, VPN, routing, switching, latency, packet loss, and connectivity troubleshooting.',
    bestFor: 'Businesses with recurring network issues',
    cta: 'Request Troubleshooting'
  },
  {
    title: 'Network Health Check',
    summary: 'Review network symptoms, monitoring, documentation, and practical improvement opportunities.',
    bestFor: 'Small businesses and growing IT teams',
    cta: 'Request a Review'
  }
]

async function submitForm() {
  status.value = 'Sending...'
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.message || 'Something went wrong.')

    status.value = data.message
    form.value = {
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
      website: ''
    }
  } catch (error) {
    status.value = error.message
  }
}
</script>

<template>
  <main>
    <section class="border-b border-cyan-500/20 bg-cyan-400/5">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 text-sm md:flex-row md:items-center md:justify-between">
        <p class="font-semibold text-cyan-300">
          Available for remote U.S. contract work • NOC • Network Support • MSP Support
        </p>
        <p class="text-slate-400">
          Philippines-based • Remote collaboration • Night-shift / after-hours friendly
        </p>
      </div>
    </section>

    <section class="border-y border-slate-800 bg-slate-950 py-10 md:py-16">
      <div class="mx-auto max-w-7xl px-6">
    
        <div class="mb-6 text-center">
          <p
            class="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400"
          >
            Network Operations • Infrastructure • Technical Support
          </p>
    
          <h2
            class="text-2xl font-bold text-white md:text-3xl"
          >
            Keeping Networks Reliable and People Connected
          </h2>
        </div>
    
        <RouterLink
          to="/#projects"
          class="
            group block
            overflow-hidden
            rounded-2xl
            border border-slate-700
            bg-slate-900
            shadow-2xl
            shadow-cyan-950/30
            transition
            hover:border-cyan-400/50
          "
        >
          <img
            src="/images/og-preview.jpg"
            alt="Frederick Francisco - Remote NOC and Network Support"
            class="
              w-full
              transition
              duration-500
              group-hover:scale-[1.01]
            "
          />
              <div class="mt-6 flex justify-center">
              <RouterLink
                to="/#projects"
                class="
                  inline-flex items-center gap-2
                  rounded-lg
                  border border-cyan-400/40
                  px-5 py-3
                  font-semibold
                  text-cyan-400
                  transition
                  hover:bg-cyan-400
                  hover:text-slate-950
                "
              >
                Explore My Network Projects
    
                <span>→</span>
              </RouterLink>
            </div>
        </RouterLink>
    
    
        <!-- Supporting text -->
        <div class="mt-6 text-center">
          <p class="mx-auto max-w-3xl text-slate-400">
            Over 12 years of experience supporting ISP and network
            operations, infrastructure, connectivity, monitoring,
            troubleshooting, and technical deployments.
          </p>
        </div>
    
      </div>
    </section>
    

    <section class="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
      <div>
       <!-- <p class="mb-4 font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Remote NOC • Network • Infrastructure Support
        </p> -->

        <h1 class="text-5xl font-bold leading-tight md:text-6xl">
          Reliable network support for U.S. businesses and MSPs.
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I help teams monitor networks, troubleshoot connectivity issues, respond to incidents,
          and support reliable day-to-day operations across network and infrastructure environments.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a href="#contact"
             class="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Request Network Support
          </a>

          <a href="#projects"
             class="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900">
            View My Experience
          </a>
        </div>

        <div class="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
          <span class="rounded-full border border-slate-800 px-3 py-2">12+ years ISP/NOC</span>
          <span class="rounded-full border border-slate-800 px-3 py-2">Cisco / MikroTik / Huawei</span>
          <span class="rounded-full border border-slate-800 px-3 py-2">PRTG / The Dude / SolarWinds</span>
        </div>
      </div>

      <div class="card">
        <p class="text-sm uppercase tracking-wider text-slate-400">Core capabilities</p>
        <div class="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div class="rounded-xl bg-slate-800 p-4">NOC Monitoring</div>
          <div class="rounded-xl bg-slate-800 p-4">Routing & Switching</div>
          <div class="rounded-xl bg-slate-800 p-4">WAN / VPN / VLAN</div>
          <div class="rounded-xl bg-slate-800 p-4">Incident Response</div>
          <div class="rounded-xl bg-slate-800 p-4">Wi-Fi / Hotspots</div>
          <div class="rounded-xl bg-slate-800 p-4">Fiber / OLT Support</div>
          <div class="rounded-xl bg-slate-800 p-4">CCTV Systems</div>
          <div class="rounded-xl bg-slate-800 p-4">Access Control</div>
        </div>
      </div>
    </section>

    <section id="services" class="border-y border-slate-800 bg-slate-900/40">
      <div class="mx-auto max-w-7xl px-6 py-20">
        <p class="font-semibold uppercase tracking-[0.18em] text-cyan-400">Services</p>
        <h2 class="section-title mt-2">Ways I can support your team</h2>
        <p class="mt-4 max-w-3xl text-slate-400">
          Flexible remote support for ongoing operations, after-hours coverage, incident troubleshooting,
          and network review. Pricing can be scoped based on environment, coverage hours, and complexity.
        </p>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article v-for="service in services" :key="service.title" class="card">
            <h3 class="text-2xl font-semibold">{{ service.title }}</h3>
            <p class="mt-3 leading-7 text-slate-400">{{ service.summary }}</p>
            <p class="mt-5 text-sm text-slate-500">
              <span class="font-semibold text-slate-300">Best for:</span> {{ service.bestFor }}
            </p>
            <a href="#contact" class="mt-6 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300">
              {{ service.cta }} →
            </a>
          </article>
        </div>
      </div>
    </section>

    <section id="projects" class="mx-auto max-w-7xl px-6 py-20">
      <p class="font-semibold uppercase tracking-[0.18em] text-cyan-400">Selected work</p>
      <h2 class="section-title mt-2">Project Showcase</h2>
      <p class="mt-4 max-w-3xl text-slate-400">
        Each project includes the challenge, my role, technologies used, work performed, results, and an image gallery.
      </p>

      <div class="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="project in projects"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          class="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg transition hover:-translate-y-1 hover:border-slate-700"
        >
          <div class="relative aspect-[16/10]">
            <ImageFallback :src="project.image" :alt="project.alt" />
            <div class="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
              {{ project.category }}
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold group-hover:text-cyan-300">{{ project.title }}</h3>
            <p class="mt-3 leading-6 text-slate-400">{{ project.short }}</p>
            <p class="mt-5 text-sm font-semibold text-cyan-400">View project →</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <section id="about" class="border-y border-slate-800 bg-slate-900/40">
      <div class="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p class="font-semibold uppercase tracking-[0.18em] text-cyan-400">About</p>
          <h2 class="section-title mt-2">Network operations experience built in real ISP environments</h2>

          <p class="mt-6 leading-8 text-slate-300">
            I am a Computer Engineering graduate with more than 12 years of experience in ISP and Network Operations Center environments.
            My background includes network monitoring, routing and switching, access networks, fiber connectivity,
            wireless deployments, incident troubleshooting, and technical coordination.
          </p>

          <p class="mt-4 leading-8 text-slate-300">
            I progressed from hands-on network operations work into a Network Operations Head role, while continuing
            to support troubleshooting, implementation, and operational reliability. I also have field implementation
            experience with CCTV, access-control systems, and Wi-Fi hotspot deployments in institutional and commercial environments.
          </p>

          <p class="mt-4 leading-8 text-slate-300">
            Today, I am focused on remote NOC, MSP, network support, and infrastructure opportunities where I can bring
            practical troubleshooting experience while continuing to expand into modern enterprise networking technologies.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a href="/resume/Frederick-Francisco-Resume.pdf"
               class="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-900">
              Download Resume
            </a>

            <a href="https://www.linkedin.com/"
               target="_blank"
               rel="noopener noreferrer"
               class="rounded-xl border border-slate-700 px-5 py-3 font-semibold hover:bg-slate-900">
              LinkedIn Profile
            </a>
          </div>

          <p class="mt-3 text-xs text-slate-500">
            Replace the LinkedIn URL and add your resume PDF before deployment.
          </p>
        </div>

        <div class="card self-start">
          <h3 class="text-xl font-semibold">Professional strengths</h3>
          <ul class="mt-5 space-y-4 text-slate-300">
            <li>• 24/7 NOC operations experience</li>
            <li>• Structured incident troubleshooting</li>
            <li>• Network monitoring and escalation</li>
            <li>• Cross-functional field coordination</li>
            <li>• Multi-vendor network experience</li>
            <li>• Fast adaptation to new technologies</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="credentials" class="mx-auto max-w-7xl px-6 py-20">
      <p class="font-semibold uppercase tracking-[0.18em] text-cyan-400">Credentials</p>
      <h2 class="section-title mt-2">Certifications & technical development</h2>

      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Previously certified</p>
          <h3 class="mt-3 text-xl font-semibold">Cisco CCNA</h3>
          <p class="mt-3 text-slate-400">
            Previous certification; currently expired/not active.
          </p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Previously certified</p>
          <h3 class="mt-3 text-xl font-semibold">MikroTik</h3>
          <p class="mt-3 text-slate-400">
            MTCNA, MTCRE, and MTCUME previously earned; certifications are not currently active.
          </p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Training</p>
          <h3 class="mt-3 text-xl font-semibold">Huawei HCIA Datacom</h3>
          <p class="mt-3 text-slate-400">
            Datacom training covering enterprise networking concepts and technologies.
          </p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Training</p>
          <h3 class="mt-3 text-xl font-semibold">Java Programming NC3</h3>
          <p class="mt-3 text-slate-400">
            Completed technical training in Java programming.
          </p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Current learning</p>
          <h3 class="mt-3 text-xl font-semibold">SD-WAN & Network Homelab</h3>
          <p class="mt-3 text-slate-400">
            Ongoing lab work covering SD-WAN, routing validation, firewall testing, and application delivery concepts.
          </p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Current learning</p>
          <h3 class="mt-3 text-xl font-semibold">Frontend Development</h3>
          <p class="mt-3 text-slate-400">
            Building with Vue.js, Tailwind CSS, Node.js, and modern web tooling.
          </p>
        </article>
      </div>
    </section>

    <section class="border-y border-slate-800 bg-slate-900/40">
      <div class="mx-auto max-w-7xl px-6 py-20">
        <p class="font-semibold uppercase tracking-[0.18em] text-cyan-400">Why work with me</p>
        <h2 class="section-title mt-2">Operations mindset, not just configuration knowledge</h2>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article class="card">
            <h3 class="text-xl font-semibold">Incident focused</h3>
            <p class="mt-3 text-slate-400">
              I approach issues by correlating symptoms, monitoring data, interface conditions, logs, and physical-layer evidence.
            </p>
          </article>

          <article class="card">
            <h3 class="text-xl font-semibold">Operationally practical</h3>
            <p class="mt-3 text-slate-400">
              My background includes production network operations as well as coordination with field teams and infrastructure work.
            </p>
          </article>

          <article class="card">
            <h3 class="text-xl font-semibold">Clear about experience</h3>
            <p class="mt-3 text-slate-400">
              Production work and homelab learning are clearly separated so clients can evaluate my experience accurately.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="mx-auto max-w-4xl px-6 py-20">
      <p class="font-semibold uppercase tracking-[0.18em] text-cyan-400">Work with me</p>
      <h2 class="section-title mt-2">Tell me what your team needs.</h2>

      <p class="mt-4 max-w-2xl text-slate-400">
        For ongoing NOC coverage, after-hours MSP support, network troubleshooting, or infrastructure support,
        send a short description of your environment and the help you need.
      </p>

      <form class="mt-8 grid gap-4 md:grid-cols-2" @submit.prevent="submitForm">
        <input
          v-model="form.name"
          required
          placeholder="Your name"
          class="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
        />

        <input
          v-model="form.email"
          required
          type="email"
          placeholder="Work email"
          class="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
        />

        <input
          v-model="form.company"
          placeholder="Company / MSP"
          class="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
        />

        <select
          v-model="form.service"
          class="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-300 outline-none focus:border-cyan-400"
        >
          <option value="">Service needed</option>
          <option>Remote NOC Monitoring</option>
          <option>After-Hours MSP Support</option>
          <option>Network Troubleshooting</option>
          <option>Network Health Check</option>
          <option>Other</option>
        </select>

        <select
          v-model="form.budget"
          class="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-300 outline-none focus:border-cyan-400 md:col-span-2"
        >
          <option value="">Project / support scope</option>
          <option>One-time troubleshooting</option>
          <option>Part-time ongoing support</option>
          <option>Full-time remote support</option>
          <option>After-hours coverage</option>
          <option>Not sure yet</option>
        </select>

        <textarea
          v-model="form.message"
          required
          rows="6"
          placeholder="Describe your network, issue, coverage hours, or project requirements"
          class="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400 md:col-span-2"
        ></textarea>

        <input
          v-model="form.website"
          type="text"
          name="website"
          autocomplete="off"
          tabindex="-1"
          class="hidden"
          aria-hidden="true"
        />

        <div class="md:col-span-2">
          <button class="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Send Inquiry
          </button>
          <p class="mt-3 text-sm text-slate-400">{{ status }}</p>
        </div>
      </form>
    </section>
  </main>
</template>
