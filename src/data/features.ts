import type { Feature } from '../types';

/**
 * 8 features laid out in a 3-column bento grid:
 *
 * Row 1: [wide: 0] [normal: 1]          → 2+1 = 3 cols
 * Row 2: [normal: 2] [normal: 3] [normal: 4]  → 1+1+1 = 3 cols
 * Row 3: [normal: 5] [wide: 6]          → 1+2 = 3 cols
 * Row 4: [wide: 7] [normal: 8]           → 2+1 = 3 cols
 */
export const FEATURES: Feature[] = [
  {
    id: 0,
    title: 'Intelligent Pipeline Builder',
    description:
      'Drag-and-drop data pipelines that self-optimise based on real-time throughput. Monitor every node live.',
    icon: 'arrow-path',
    span: 'wide',
    accentColor: 'deep-saffron',
    stat: { value: '10×', label: 'faster setup' },
    visual: 'pipeline',
  },
  {
    id: 1,
    title: 'Predictive Analytics Engine',
    description:
      'ML-powered forecasting that integrates directly into your data warehouse.',
    icon: 'chart-pie',
    span: 'normal',
    accentColor: 'forsythia',
    stat: { value: '94%', label: 'accuracy' },
    visual: 'sparkline',
  },
  {
    id: 2,
    title: 'Real-Time Metrics',
    description:
      'Track KPIs across every data source in a unified live view.',
    icon: 'arrow-trending-up',
    span: 'normal',
    accentColor: 'mystic-mint',
    stat: { value: '<16ms', label: 'latency' },
    visual: 'bars',
  },
  {
    id: 3,
    title: 'Automation Workflows',
    description:
      'No-code automation triggered by data events across your entire stack.',
    icon: 'cog-8-tooth',
    span: 'normal',
    accentColor: 'forsythia',
    stat: { value: '400+', label: 'templates' },
    visual: 'rings',
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II, GDPR compliant. Role-based access and end-to-end encryption.',
    icon: 'shield',
    span: 'normal',
    accentColor: 'mystic-mint',
    stat: { value: '99.9%', label: 'uptime SLA' },
    visual: 'none',
    tags: ['SOC 2', 'GDPR', 'HIPAA', 'AES-256', 'SSO'],
  },
  {
    id: 5,
    title: 'AI Orchestration Core',
    description:
      'The intelligence layer that routes, prioritises, and validates every data job in real time.',
    icon: 'cube-16-solid',
    span: 'normal',
    accentColor: 'deep-saffron',
    stat: { value: '2.4B+', label: 'events/day' },
    visual: 'globe',
  },
  {
    id: 6,
    title: 'Platform Integrations',
    description:
      '200+ native connectors to databases, APIs, cloud storage, and SaaS tools. Ship in minutes.',
    icon: 'link',
    span: 'wide',
    accentColor: 'forsythia',
    stat: { value: '200+', label: 'connectors' },
    visual: 'tags',
    tags: ['Snowflake', 'BigQuery', 'S3', 'Kafka', 'Postgres', 'Stripe', 'dbt', 'Airflow'],
  },
  {
    id: 7,
    title: 'Developer-First SDK',
    description:
      'Full TypeScript SDK, REST & GraphQL APIs, and webhooks so your team stays unblocked.',
    icon: 'beaker',
    span: 'wide',
    accentColor: 'mystic-mint',
    stat: { value: 'v3.2', label: 'stable' },
    visual: 'code',
  },
  {
    id: 8,
    title: 'Smart Query Engine',
    description:
      'Natural language to SQL. Ask your data questions in plain English and get instant answers.',
    icon: 'search',
    span: 'normal',
    accentColor: 'deep-saffron',
    stat: { value: '3s', label: 'avg query' },
    visual: 'none',
  },
];
