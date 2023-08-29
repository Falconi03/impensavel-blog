"use client";

import { motion } from "framer-motion";

function Sobre() {
  return (
    <div className="flex py-20 items-center gap-24 relative">
      <div className="hidden lg:block relative w-1/3 bg-primary rounded-[0%_100%_70%_30%_/_42%_39%_61%_58%] p-12  overflow-hidden">
        <img src="/impensavel.png" alt="Logo Ipensavel" />
        <div className="absolute w-24 h-24 bg-yellow-200 blur-xl animate-pulse left-8 xl:left-12 2xl:left-16 -translate-y-16 2xl:-translate-y-20 top-1/2"></div>
      </div>
      <div className="flex flex-col items-center gap-10 w-full lg:w-2/3">
        <div className="p-6 2xl:p-20 rounded-[50px] w-10/12 lg:w-1/2 bg-gradient-to-br from-[#cacaca] to[#f0f0f0] shadow-[-33px_33px_66px_#bebebe,33px_-33px_66px_#ffffff]">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1, font: "30px" }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <p>
              "Impensável", oh termo tão sublime, No reino das ideias, tu és a
              fronteira, Além do horizonte do pensamento, te redescobre, Como
              estrelas secretas em noite derradeira. Tu és a miragem nos olhos
              do sonho, Onde a mente hesita, sem asas para voar, Um mistério
              profundo que se desenha, Nas margens do imaginário, a dançar. És o
              suspiro do instante sem forma, O segredo guardado nas dobras do
              tempo, O elo que conecta o real ao impossível, Num abraço de
              neblina, tão terno. Ah, "impensável", és a poesia dos limites, A
              pintura de palavras que o pensamento não cria, Desafias a mente a
              abraçar o infinito, E desvendar o enigma que a alma guia.
            </p>
            <div className="flex justify-end font-semibold">
              <span>"ChatGPT"</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
