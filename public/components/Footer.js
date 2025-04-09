import Link from "next/link"
import { Instagram, Facebook, MessageSquare, Scale } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-100 py-12 text-gray-800 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-6 w-6 text-amber-600" />
              <h3 className="text-xl font-bold text-navy-800">Adolfo Mendes</h3>
            </div>
            <p className="mb-4 text-gray-600">Advocacia especializada com compromisso, ética e resultados.</p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-navy-600 transition-colors hover:text-amber-600" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-navy-600 transition-colors hover:text-amber-600" />
              </Link>
              <Link href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageSquare className="h-5 w-5 text-navy-600 transition-colors hover:text-amber-600" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-navy-800">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-gray-600 transition-colors hover:text-amber-600">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gray-600 transition-colors hover:text-amber-600">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#depoimentos" className="text-gray-600 transition-colors hover:text-amber-600">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="#localizacao" className="text-gray-600 transition-colors hover:text-amber-600">
                  Localização
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-600 transition-colors hover:text-amber-600">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold text-navy-800">Contato</h3>
            <address className="not-italic text-gray-600">
              <p className="mb-2">Av. Paulista, 1500, Sala 501</p>
              <p className="mb-2">Bela Vista, São Paulo - SP</p>
              <p className="mb-2">Telefone: (11) 99999-9999</p>
              <p>Email: adolfo@advogado.com</p>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Advogado Adolfo Mendes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
