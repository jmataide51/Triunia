"use client";

import * as React from "react";
import { ChevronDown, ImageOff, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";

type ReaderData = {
  id: string; title: string; subtitle: string; lore: string;
  images: string[]; tags: string[]; actions: React.ReactNode;
};

export function LandscapeReader({ data, onClose, returnFocus }: {
  data: ReaderData | null; onClose: () => void; returnFocus: React.RefObject<HTMLElement | null>;
}) {
  const previous = React.useRef<ReaderData | null>(null);
  React.useEffect(() => { if (data) previous.current = data; }, [data]);
  const current = data || previous.current;
  return <Dialog open={!!data} onOpenChange={open => { if (!open) onClose(); }}>
    <DialogContent className="landscape-reader" showCloseButton={false} aria-describedby={undefined}
      onCloseAutoFocus={event => { event.preventDefault(); returnFocus.current?.focus({ preventScroll: true }); }}>
      {current && <ReaderBody key={current.id} data={current} onClose={onClose} />}
    </DialogContent>
  </Dialog>;
}

function ReaderBody({ data, onClose }: { data: ReaderData; onClose: () => void }) {
  const [index, setIndex] = React.useState(0);
  const [fit, setFit] = React.useState<"cover" | "contain">("cover");
  const lore = React.useRef<HTMLElement>(null);
  const source = data.images[index] || data.images[0];
  return <>
    <button className="reader-close" onClick={onClose} aria-label="Fechar leitura"><X /></button>
    <section className="reader-hero" data-fit={fit} aria-label="Ilustração de capa">
      {source && <button className="reader-fit" aria-pressed={fit === "contain"}
        onClick={() => setFit(value => value === "cover" ? "contain" : "cover")}>
        {fit === "cover" ? "Ver imagem inteira" : "Preencher tela"}
      </button>}
      <ReaderArt key={source || "empty"} source={source} title={data.title} />
      <div className="reader-hero-shade" />
      <header className="reader-title">
        <DialogTitle asChild><h1>{data.title}</h1></DialogTitle>
        {data.subtitle && <p>{data.subtitle}</p>}
        <button className="reader-continue" onClick={() => {
          lore.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
          lore.current?.focus({ preventScroll: true });
        }}>Conheça a história <ChevronDown size={18} /></button>
      </header>
    </section>
    <section className="reader-lore" ref={lore} tabIndex={-1} aria-label={`História de ${data.title}`}>
      {data.images.length > 1 && <nav className="reader-gallery" aria-label="Imagens privadas do mestre">
        {data.images.map((image, n) => <button key={`${image}-${n}`} aria-pressed={index === n}
          onClick={() => { setIndex(n); lore.current?.parentElement?.scrollTo({ top: 0, behavior: "instant" }); }}>
          <img src={image} alt="" loading="lazy" decoding="async" />
          <span>{n === 0 ? "Capa pública" : `Privada ${n + 1}`}</span>
        </button>)}
      </nav>}
      {!!data.tags.length && <div className="reader-tags">{data.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}
      <div className="reader-prose">{data.lore.trim()
        ? data.lore.split(/\n{2,}/).map((paragraph, n) => <p key={n}>{paragraph}</p>)
        : <p className="reader-empty">Esta história ainda não foi escrita.</p>}</div>
      {data.actions && <footer className="reader-actions">{data.actions}</footer>}
    </section>
  </>;
}

function ReaderArt({ source, title }: { source?: string; title: string }) {
  const [state, setState] = React.useState(source ? "loading" : "empty");
  const [attempt, setAttempt] = React.useState(0);
  return <div className="reader-art" aria-busy={state === "loading"}>
    {state === "loading" && <Skeleton className="reader-skeleton" aria-label="Carregando ilustração" />}
    {source && state !== "error" && <img key={attempt} src={source} alt={title} decoding="async" fetchPriority="high"
      className={state === "ready" ? "ready" : ""} onLoad={() => setState("ready")} onError={() => setState("error")} />}
    {(state === "error" || state === "empty") && <div className="reader-art-fallback"><ImageOff />
      <p>{state === "error" ? "Não foi possível carregar a ilustração." : "Ainda sem ilustração de capa."}</p>
      {state === "error" && <button onClick={() => { setState("loading"); setAttempt(n => n + 1); }}>Tentar novamente</button>}
    </div>}
  </div>;
}
