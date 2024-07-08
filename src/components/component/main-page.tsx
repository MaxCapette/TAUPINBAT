/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import ContactPage from "../contact/contact";

export function MainPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary to-secondary">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <img src="/logo.png" width={80} height={80} alt="TAUPINBAT" />
            <span className="text-lg font-semibold">TAUPINBAT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#about" className="hover:underline" prefetch={false}>
              À propos
            </Link>
            <Link href="#services" className="hover:underline" prefetch={false}>
              Services
            </Link>
            <Link
              href="#testimonials"
              className="hover:underline"
              prefetch={false}
            >
              Témoignages
            </Link>
            <Link href="#contact" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-full max-w-xs  p-6 backgroundCustom"
              side="right"
            >
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                    href="#about"
                  >
                    À propos
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                    href="#services"
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                    href="#testimonials"
                  >
                    Témoignages
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className=" py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Dépannage et maintenance de vos équipements frigorifiques
                </h1>
                <p className="text-muted mb-6">
                  TAUPINBAT, votre partenaire de confiance pour la maintenance
                  et le dépannage de vos chambres froides, meubles réfrigérés,
                  climatisations et pompes à chaleur.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Contactez-nous
                </Link>
              </div>
              <div>
              <img
                  src="/intro.jpeg"
                  width={600}
                  height={400}
                  alt="TAUPINBAT"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/about.jpeg"
                  width={600}
                  height={400}
                  alt="TAUPINBAT"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  À propos de TAUPINBAT
                </h2>
                <p className="text-muted-foreground mb-6">
                  Depuis plus de 20 ans, TAUPINBAT est spécialisée dans le
                  dépannage et la maintenance de vos équipements frigorifiques.
                  Nous mettons notre expertise à votre service pour assurer le
                  bon fonctionnement de vos installations et garantir la
                  fraîcheur de vos produits.
                </p>
                <p className="text-muted-foreground mb-6">
                  Notre équipe de techniciens qualifiés intervient rapidement
                  pour résoudre tous vos problèmes, que ce soit pour une chambre
                  froide, un meuble réfrigéré, une climatisation ou une pompe à
                  chaleur.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Nos services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-sm p-6">
                <FolderIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Dépannage de chambres froides
                </h3>
                <p className="text-muted-foreground">
                  Nos techniciens interviennent rapidement pour résoudre tous
                  vos problèmes de chambres froides.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6">
                <RefrigeratorIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Maintenance de meubles réfrigérés
                </h3>
                <p className="text-muted-foreground">
                  Nous assurons la maintenance régulière de vos meubles
                  réfrigérés pour garantir leur bon fonctionnement.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-sm p-6">
                <AirVentIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Entretien de climatisations et pompes à chaleur
                </h3>
                <p className="text-muted-foreground">
                  Nos experts prennent soin de vos climatisations et pompes à
                  chaleur pour une performance optimale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-muted py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Témoignages de nos clients
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold py-4">John Doe</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;L&apos;équipe de TAUPINBAT a été très réactive et efficace
                    pour résoudre un problème urgent sur notre chambre froide.
                    Nous sommes très satisfaits de leur service.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold py-4">Jane Arden</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;Nous faisons confiance à TAUPINBAT depuis des années pour
                    l&apos;entretien de nos meubles réfrigérés. Leur service est
                    toujours de qualité et leur expertise est incontestable.&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-4">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold py-4">Sarah Martin</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  &quot;Nous avons fait appel à TAUPINBAT pour la maintenance de
                    notre système de climatisation. Leur intervention a été
                    rapide et leur travail de qualité. Nous les recommandons
                    sans hésiter.&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Contactez-nous
            </h2>

            <ContactPage />
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">&copy; 2024 TAUPINBAT.</p>
          <p className="  "> Tous droits réservés.</p>
        </div>
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">48 CRS BLAISE PASCAL</p>
          <p className="   ">91000 EVRY-COURCOURONNES </p>
          <p className="  mt-4 ">contact@taupinbat.fr</p>

          <p className="  mt-4 ">TEL: 05 35 54 19 41</p>
        </div>
      </footer>
    </div>
  );
}

function AirVentIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 8h12" />
      <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12" />
      <path d="M6.6 15.6A2 2 0 1 0 10 17v-5" />
    </svg>
  );
}

function FolderIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}



function RefrigeratorIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
      <path d="M5 10h14" />
      <path d="M15 7v6" />
    </svg>
  );
}
