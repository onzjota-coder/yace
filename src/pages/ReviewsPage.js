  import React from 'react';
import { Star } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import PrimaryButton from '../components/ui/PrimaryButton';
import { reviews } from '../data/sampleData';

const ReviewsPage = () => (
  <div className="space-y-4">
    <SectionTitle icon={Star} title="Avaliações" subtitle="Transparência e comunidade no centro" />
    <div className="grid gap-3">
      {reviews.map((r, i) => (
        <div key={i} className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5 flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-medium">{r.user}</div>
            <div className="text-xs opacity-80">{r.text}</div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: r.rating }).map((_, j) => (
              <Star key={j} size={16} className="text-yellow-400" fill="currentColor" />
            ))}
          </div>
        </div>
      ))}
      <div className="p-4 rounded-2xl ring-1 ring-white/10 bg-white/5">
        <div className="text-sm font-medium mb-2">Deixe sua avaliação</div>
        <div className="grid md:grid-cols-[1fr_auto] gap-2">
          <input placeholder="Escreva aqui..." className="px-3 py-2 rounded-xl bg-transparent border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          <PrimaryButton>Publicar</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewsPage;
