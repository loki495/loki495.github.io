window.site = {
  name: 'Andres Crucitti',
  role: 'Senior PHP / Laravel Developer',
  pitch: '15+ years building and running PHP applications, from e-commerce and CRMs to self-hosted tools. Looking for a permanent backend or full-stack role.',
  location: 'Los Angeles, CA (Pacific Time)',
  links: {
    github: 'https://github.com/loki495',
    linkedin: 'https://linkedin.com/in/andres-crucitti',
    email: 'andres@ac495.net',
    resume: 'https://raw.githubusercontent.com/loki495/loki495/main/Andres-Crucitti-PHP-Laravel-Developer.pdf',
  },
  projects: [
    { name: 'insights', stack: 'Laravel · Livewire · Plaid', text: 'Self-hosted personal-finance app: bank sync, categorization rules, transfer matching and reports.' },
    { name: 'dibs', stack: 'PHP · MCP', text: 'Todo tracker built for AI agents, which claim and complete tasks through an MCP server.' },
    { name: 'sessioneer', stack: 'PHP · Web UI · CLI', text: 'LAN-only web UI and CLI to manage Claude Code, Codex and OpenCode sessions, usable from a phone.' },
    { name: 'homie', stack: 'PHP · Docker', text: 'Configurable home-lab dashboard with live data from Sonarr, Radarr and others.' },
    { name: 'dotfiles', stack: 'Shell · Arch · Hyprland', text: 'Dotfiles with a tested installer, Neovim/PHP tooling and CI.' },
    { name: 'peck', title: 'PeckPHP', contrib: true, url: 'https://github.com/peckphp/peck/pull/28', stack: 'PHP · CLI', text: 'Merged: show the full line and column position of each misspelling in the output of this code spell checker.' },
    { name: 'serenity-life', title: 'SerenityOS: Game of Life', contrib: true, url: 'https://github.com/SerenityOS/serenity/pull/6720', stack: 'C++ · GUI', text: 'Merged: added a Game of Life app to the SerenityOS desktop.' },
    { name: 'serenity-pin', title: 'SerenityOS: pinnable windows', contrib: true, url: 'https://github.com/SerenityOS/serenity/pull/8519', stack: 'C++ · WindowServer', text: 'Merged: windows can be pinned always on top in the WindowServer.' },
  ],
  skills: {
    Backend: ['PHP', 'Laravel', 'Livewire', 'REST and MCP integrations', 'MySQL / MariaDB', 'SQLite', 'Redis'],
    Frontend: ['Alpine.js', 'Tailwind CSS', 'Blade', 'JavaScript'],
    Quality: ['Pest', 'PHPUnit', 'Playwright', 'PHPStan', 'Pint', 'Rector'],
    Infra: ['Docker', 'Linux', 'Nginx', 'Traefik', 'Cloudflare', 'AWS', 'GitHub Actions', 'Shell'],
    Also: ['C++', 'Git', 'AI-assisted development'],
  },
  experience: [
    {
      company: 'PR Monsters', title: 'Lead PHP/Laravel Developer & Systems Administrator', meta: 'Independent contractor · Remote', years: '2020 – present',
      text: 'Owned architecture, implementation, integrations, deployment and production support across e-commerce, reservation, CRM and internal operations systems.',
      points: [
        'Replaced spreadsheets with a Laravel/Livewire CRM used daily by five operations staff to manage thousands of leads and tasks, with lead imports, SMS follow-up and automated tests.',
        'Automated Amazon and Walmart catalog, inventory, order and shipment workflows, supporting 50–100 orders per day at peak.',
        'Diagnosed recurring MySQL slowdowns caused by crawler traffic; improved queries and indexes, added caching and Cloudflare bot controls.',
      ],
    },
    {
      company: 'Get Found Marketing', title: 'Web Developer & Systems Administrator', meta: 'Independent contractor · Remote', years: '2014 – 2020',
      text: 'Built and maintained websites for about 20–30 local-business clients across custom PHP, WordPress and legacy platforms.',
      points: [
        'Managed dozens of hosted sites: migrations, backups, security updates, performance troubleshooting and deployment scripts.',
        'Supported analytics, SEO and advertising-conversion tracking for clients.',
        'Guided a junior contract developer and introduced Git-based workflows and development procedures.',
      ],
    },
    {
      company: 'Dascheap', title: 'Web Developer', meta: 'Independent contractor · Los Angeles, CA', years: '2010 – 2014',
      text: 'Sole programmer for an in-office e-commerce and dropshipping business.',
      points: [
        'Extended an off-the-shelf cart with product variants, custom fields, themes, PayPal and multiple credit-card gateways.',
        'Built nightly distributor-import pipelines for 20,000+ products, automating inventory, pricing and availability.',
        'Recovered business data after a dedicated-server disk failure, then automated remote backups with copy-verification checks.',
      ],
    },
  ],
  sections: ['about', 'projects', 'skills', 'experience', 'contact'],
};
