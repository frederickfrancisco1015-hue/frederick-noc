export const projects = [
  {
    slug: 'noc-monitoring-incident-response',
    title: 'NOC Monitoring & Incident Response',
    category: 'Network Operations',
    image: '/images/noc-monitoring.jpg',
    gallery: [
      '/images/noc-monitoring.jpg',
      '/images/noc-monitoring-2.jpg',
      '/images/noc-monitoring-3.jpg'
    ],
    alt: 'Network monitoring dashboard project image',
    short:
      'Hands-on ISP/NOC operations including proactive monitoring, alert investigation, incident escalation, and coordination with technical field teams.',
    challenge:
      'Maintain service stability in a 24/7 ISP environment while responding quickly to alerts, customer-impacting incidents, and access or uplink problems.',
    role:
      'Monitored network health, investigated alarms, performed first-line and escalated troubleshooting, coordinated field activity, and documented incidents and recovery actions.',
    technologies: ['PRTG', 'The Dude', 'MikroTik', 'Cisco', 'Huawei', 'PPPoE', 'OLT', 'TCP/IP'],
    work: [
      'Reviewed monitoring alerts, interface utilization, packet loss, and device health.',
      'Investigated routing, switching, PPPoE, uplink, and access-network incidents.',
      'Coordinated technical field teams when physical inspection or replacement was required.',
      'Validated recovery using monitoring data and post-incident checks.',
      'Documented findings, actions, and escalation information for operations continuity.'
    ],
    result:
      'Supported reliable day-to-day network operations and faster incident isolation through proactive monitoring and structured troubleshooting.',
    note:
      'Production experience from ISP/NOC operations. Sensitive customer and network details are intentionally excluded.'
  },
  {
    slug: 'cctv-installation-troubleshooting',
    title: 'CCTV Installation & Troubleshooting',
    category: 'Physical Security',
    image: '/images/cctv-installation.jpg',
    gallery: [
      '/images/cctv-installation.jpg',
      '/images/cctv-installation-2.jpg',
      '/images/cctv-installation-3.jpg'
    ],
    alt: 'CCTV camera installation project image',
    short:
      'Installation and troubleshooting experience for CCTV systems across commercial and institutional environments.',
    challenge:
      'Deploy dependable surveillance coverage while ensuring cameras, cabling, power, connectivity, and recording paths were correctly installed and tested.',
    role:
      'Supported physical installation, cable routing, connectivity checks, camera testing, fault isolation, and handover verification.',
    technologies: ['IP CCTV', 'Network Cabling', 'PoE', 'LAN', 'NVR/DVR', 'Testing Tools'],
    work: [
      'Assisted with camera installation and physical mounting.',
      'Supported structured cabling and network connectivity for IP-based cameras.',
      'Verified power, link status, image availability, and basic recording functionality.',
      'Troubleshot cabling, connectivity, and endpoint issues.',
      'Performed final checks before handover to site users or administrators.'
    ],
    result:
      'Delivered operational CCTV installations with verified connectivity and usable camera coverage across institutional and commercial sites.',
    note:
      'Project images should avoid exposing exact camera coverage maps, credentials, or other sensitive security details.'
  },
  {
    slug: 'access-control-sensor-deployment',
    title: 'Access Control & Sensor Deployment',
    category: 'Physical Security',
    image: '/images/access-control.jpg',
    gallery: [
      '/images/access-control.jpg',
      '/images/access-control-2.jpg',
      '/images/access-control-3.jpg'
    ],
    alt: 'Access control sensor installation project image',
    short:
      'Supported access-control and sensor deployments in university environments, including installation, connectivity checks, testing, and technical troubleshooting.',
    challenge:
      'Install and validate access-control components and sensors while making sure door-side hardware, connectivity, and system responses worked as intended.',
    role:
      'Provided installation support, device connectivity checks, sensor testing, fault isolation, and verification in a university environment.',
    technologies: ['Access Control', 'Door Sensors', 'LAN', 'Low-Voltage Cabling', 'Testing'],
    work: [
      'Supported installation of access-control devices and related sensors.',
      'Checked cabling, connections, endpoint status, and basic device communication.',
      'Tested sensor response and access-control behavior after installation.',
      'Assisted with troubleshooting when a device or sensor did not respond as expected.',
      'Verified functionality before project handover.'
    ],
    result:
      'Helped complete functional access-control and sensor deployments with verified device response and connectivity.',
    note:
      'Production field experience. The site is described generically as a university to protect client details.'
  },
  {
    slug: 'wifi-hotspot-schools-hospitals',
    title: 'Wi-Fi Hotspot Deployment',
    category: 'Wireless Networking',
    image: '/images/wifi-hotspot.jpg',
    gallery: [
      '/images/wifi-hotspot.jpg',
      '/images/wifi-hotspot-2.jpg',
      '/images/wifi-hotspot-3.jpg'
    ],
    alt: 'Wi-Fi hotspot deployment project image',
    short:
      'Implemented and supported centralized Wi-Fi hotspot solutions for schools and hospitals.',
    challenge:
      'Provide manageable wireless access for many users while maintaining user authentication, bandwidth control, and reliable connectivity.',
    role:
      'Configured hotspot services, user access, bandwidth policies, connectivity, and operational troubleshooting for institutional deployments.',
    technologies: ['MikroTik Hotspot', 'User Manager', 'Wi-Fi', 'VLAN', 'Bandwidth Management', 'LAN'],
    work: [
      'Configured centralized hotspot services and user access.',
      'Applied bandwidth-management policies for shared internet access.',
      'Supported access-point and LAN connectivity troubleshooting.',
      'Validated user login and end-to-end internet access.',
      'Assisted with operational support after deployment.'
    ],
    result:
      'Enabled centralized and manageable Wi-Fi access for school and hospital environments while improving control over user access and bandwidth usage.',
    note:
      'Production deployment experience. Universities, Hospitals, Business Establishments.'
  },
  {
    slug: 'fiber-access-network-support',
    title: 'Fiber & Access Network Support',
    category: 'ISP Infrastructure',
    image: '/images/fiber-network.jpg',
    gallery: [
      '/images/fiber-network.jpg',
      '/images/fiber-network-2.jpg',
      '/images/fiber-network-3.jpg'
    ],
    alt: 'Fiber optic network project image',
    short:
      'Supported fiber-optic access infrastructure, OLT connectivity, optical-power checks, uplink troubleshooting, and service restoration.',
    challenge:
      'Quickly isolate physical-layer and access-network faults that could affect many subscribers or generate recurring service interruptions.',
    role:
      'Performed optical checks, monitored OLT and uplink conditions, correlated alarms with network symptoms, and coordinated physical remediation.',
    technologies: ['Fiber Optics', 'OLT', 'Optical Power Meter', 'PPPoE', 'PRTG', 'MikroTik'],
    work: [
      'Reviewed OLT interface status and optical readings.',
      'Checked fiber links and connectors during connectivity incidents.',
      'Correlated interface errors with monitoring and user-impact symptoms.',
      'Worked with field teams on cable, patch-cord, or connector remediation.',
      'Validated service recovery after corrective action.'
    ],
    result:
      'Improved fault isolation between logical network issues and physical fiber problems, reducing unnecessary troubleshooting steps.',
    note:
      'Production ISP experience with customer-identifying data removed.'
  },
  {
    slug: 'sdwan-network-homelab',
    title: 'SD-WAN & Network Lab',
    category: 'Homelab',
    image: '/images/sdwan-homelab.jpg',
    gallery: [
      '/images/sdwan-homelab.jpg',
      '/images/sdwan-homelab-2.jpg',
      '/images/sdwan-homelab-3.jpg'
    ],
    alt: 'SD-WAN network homelab project image',
    short:
      'Built lab environments for multi-site SD-WAN, routing validation, firewall testing, and application-delivery concepts.',
    challenge:
      'Extend practical knowledge into modern enterprise networking technologies that were not part of daily production responsibilities.',
    role:
      'Designed and tested virtual lab scenarios, documented configurations, validated routing behavior, and practiced troubleshooting workflows.',
    technologies: ['GNS3', 'SD-WAN', 'pfSense', 'HAProxy', 'Routing', 'VPN', 'Virtualization'],
    work: [
      'Built multi-site virtual network topologies.',
      'Practiced routing and failover validation.',
      'Tested firewall, VPN, and segmentation concepts.',
      'Explored HAProxy/load-balancing behavior and backend health checks.',
      'Documented findings and troubleshooting observations.'
    ],
    result:
      'Created a repeatable environment for learning and validating modern network and application-delivery concepts.',
    note:
      'Homelab experience only; this section is intentionally distinguished from production deployments.'
  }
]

export function getProject(slug) {
  return projects.find(project => project.slug === slug)
}
