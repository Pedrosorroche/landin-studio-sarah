<script setup>
const whatsapp =
  'https://wa.me/5561996595299?text=Olá! Quero agendar um horário no Studio Sarah Sorroche.'
</script>

<template>
  <div class="bg-[#F8F4EC] text-[#2B2620]">
    <section class="relative min-h-screen overflow-hidden bg-[#F7F3EE]">
      <div class="absolute inset-0 hidden md:block">
        <div class="absolute inset-y-0 right-0 w-[58%] overflow-hidden">
          <img src="/hero-sarah.jpg" class="h-full w-full object-cover object-[52%_center]"
            alt="Sarah Sorroche, especialista em lash e brow" />
        </div>

        <div
          class="absolute inset-0 bg-[linear-gradient(90deg,#F7F3EE_0%,#F7F3EE_36%,rgba(247,243,238,.94)_47%,rgba(247,243,238,.48)_58%,rgba(247,243,238,0)_70%)]" />

        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_22%_48%,rgba(255,255,255,.72),rgba(255,255,255,0)_42%)]" />
      </div>

      <header class="relative z-20 px-6 py-7 md:px-16">
        <div class="flex items-center justify-between">
          <div class="inline-flex flex-col items-center">
            <p class="font-serif text-3xl leading-none text-[#A97927] md:text-[42px]">
              Sarah Sorroche
            </p>

            <p class="mt-2 text-[10px] font-semibold uppercase tracking-[0.48em] text-[#B88A44]">
              Lash • Brow
            </p>
          </div>

          <a :href="whatsapp"
            class="rounded-full border-2 border-[#B88A44] bg-[#D6B36A] px-8 py-3 text-sm font-bold text-[#17130F] shadow-[0_16px_34px_rgba(80,57,22,.22)] transition hover:border-[#A97927] hover:bg-[#C79A3E] hover:text-white">
            Agendar
          </a>
        </div>
      </header>

      <div class="relative z-10 grid min-h-[calc(100vh-104px)] items-center md:grid-cols-[minmax(0,.92fr)_minmax(0,1.08fr)]">
        <div class="px-6 pb-14 pt-8 md:px-16 md:pb-20">
          <p class="mb-6 text-xs font-semibold uppercase tracking-[0.45em] text-[#B88A44] md:text-sm">
            Luxo • Acolhimento • Transformação
          </p>

          <h1 class="max-w-3xl font-serif text-5xl leading-[0.92] text-[#241F1A] md:text-7xl xl:text-8xl">
            Seu olhar merece esse cuidado.
          </h1>

          <p class="mt-8 max-w-xl text-lg font-medium leading-relaxed text-[#5F564C]">
            Atendimento especializado em lash lifting, brow lamination e design
            de sobrancelhas para realçar sua beleza natural.
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <a :href="whatsapp"
              class="inline-flex justify-center rounded-full bg-[#D6B36A] px-10 py-5 font-semibold text-[#17130F] shadow-[0_18px_35px_rgba(184,138,68,.25)] transition hover:scale-[1.02]">
              Agendar atendimento
            </a>

            <a href="#servicos"
              class="inline-flex justify-center rounded-full border border-[#B88A44]/45 px-10 py-5 font-semibold text-[#2B2620] transition hover:bg-[#2B2620] hover:text-white">
              Ver serviços
            </a>
          </div>
        </div>

        <div class="relative h-[56svh] overflow-hidden md:hidden">
          <img src="/hero-sarah.jpg" class="h-full w-full object-cover object-[50%_18%]"
            alt="Sarah Sorroche, especialista em lash e brow" />

          <div class="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-transparent to-transparent" />
        </div>
      </div>
    </section>

    <section class="px-6 py-28 md:px-16 md:py-36">
      <div class="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.95fr_1.05fr]">
        <div class="relative order-2 md:order-1">
          <div class="absolute inset-0 translate-x-5 translate-y-5 rounded-[40px] bg-[#E8DED0]" />

          <img src="/sobre-sarah.jpg"
            class="relative aspect-[4/5] w-full rounded-[40px] object-cover object-center shadow-[0_40px_80px_rgba(0,0,0,.10)]"
            alt="Sarah Sorroche" />
        </div>

        <div class="order-1 md:order-2">
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#B88A44]">
            Sobre
          </p>

          <h2 class="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Técnica, delicadeza e cuidado em cada detalhe.
          </h2>

          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-[#6D655C]">
            No Studio Sarah Sorroche, cada atendimento é pensado para realçar sua
            beleza natural com sofisticação, leveza e acolhimento. Da escolha da
            técnica ao acabamento final, tudo é feito com atenção para que você se
            sinta segura, valorizada e ainda mais confiante.
          </p>

          <div class="mt-10 border-l border-[#B88A44] pl-6">
            <p class="font-serif text-2xl">Sarah Sorroche</p>
            <p class="mt-2 text-[#B88A44]">Especialista em Lash & Brow</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#15120F] px-6 py-28 text-white md:px-16 md:py-36">
      <div class="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[1.1fr_.9fr]">
        <div class="overflow-hidden rounded-[40px]">
          <img src="/atendimento-sarah.jpg" class="h-full w-full object-cover"
            alt="Atendimento no Studio Sarah Sorroche" />
        </div>

        <div>
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#D6B36A]">
            Experiência
          </p>

          <h2 class="font-serif text-4xl leading-tight md:text-6xl">
            Um momento reservado para cuidar de você.
          </h2>

          <p class="mt-8 text-lg leading-relaxed text-white/70">
            Mais do que um procedimento, cada atendimento é uma experiência de
            cuidado. Um ambiente acolhedor, olhar atento aos detalhes e técnicas
            pensadas para valorizar sua beleza com naturalidade.
          </p>

          <div class="mt-10 grid gap-4 sm:grid-cols-2">
            <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
              Atendimento reservado
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
              Técnica e segurança
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
              Resultado natural
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-5">
              Luxo acessível
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="servicos" class="bg-white px-6 py-28 md:px-16 md:py-36">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 max-w-3xl">
          <p class="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#B88A44]">
            Serviços
          </p>

          <h2 class="font-serif text-4xl leading-tight md:text-6xl">
            Procedimentos para realçar seu olhar.
          </h2>
        </div>

        <div class="grid gap-8 md:grid-cols-3">
          <div class="group">
            <div class="aspect-[4/5] overflow-hidden rounded-[32px] bg-[#EEE3D6]">
              <img src="/servico-lash.jpg"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105" alt="Lash lifting" />
            </div>
            <p class="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#B88A44]">
              Cílios
            </p>
            <h3 class="mt-2 font-serif text-3xl">Lash Lifting</h3>
            <p class="mt-3 text-[#6D655C]">
              Curvatura natural, leveza e elegância sem extensões.
            </p>
          </div>

          <div class="group">
            <div class="aspect-[4/5] overflow-hidden rounded-[32px] bg-[#E8D6BF]">
              <img src="/servico-brow.jpg"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                alt="Brow lamination" />
            </div>
            <p class="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#B88A44]">
              Brow
            </p>
            <h3 class="mt-2 font-serif text-3xl">Brow Lamination</h3>
            <p class="mt-3 text-[#6D655C]">
              Sobrancelhas alinhadas, sofisticadas e com mais presença.
            </p>
          </div>

          <div class="group">
            <div class="aspect-[4/5] overflow-hidden rounded-[32px] bg-[#D9C3A6]">
              <img src="/servico-design.jpg"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                alt="Design de sobrancelhas" />
            </div>
            <p class="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#B88A44]">
              Design
            </p>
            <h3 class="mt-2 font-serif text-3xl">Design de Sobrancelhas</h3>
            <p class="mt-3 text-[#6D655C]">
              Harmonia, definição e acabamento pensado para o seu rosto.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#211C18] px-6 py-28 text-center text-white md:py-36">
      <p class="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#D6B36A]">
        Studio Sarah Sorroche
      </p>

      <h2 class="mx-auto max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        Pronta para viver sua transformação?
      </h2>

      <a :href="whatsapp"
        class="mt-10 inline-flex rounded-full bg-[#D6B36A] px-10 py-5 font-medium text-black transition hover:scale-[1.02]">
        Agendar agora
      </a>
    </section>
  </div>
</template>
