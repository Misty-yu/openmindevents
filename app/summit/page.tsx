import { permanentRedirect } from 'next/navigation';

export default function LegacySummitPage() {
  permanentRedirect('/forum');
}
