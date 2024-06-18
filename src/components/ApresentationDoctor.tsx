import React from 'react'
import ImageFlavia from "../../src/assets/flavia.jpeg"
import ImageAmanda from "../../src/assets/amanda.png"
import ImageJesica from "../../src/assets/jesica.png"
import gif from "../../src/assets/cara_de_assustada.gif"

export default function ApresentationDoctor() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">

        <div aria-hidden="true" className="flex -z-[1] absolute start-0">
          <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20">
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
          <div className="hidden lg:block lg:col-span-2">
            <img className="rounded-xl"
              src={gif}
              alt="Imagem" />
          </div>

          <div className="lg:col-span-4">

            <blockquote>

              <p className="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-neutral-200">
                A fonoaudiologia na palma da sua mão
              </p>

              <div className="mt-6">
                <div className="flex items-center">
                  <div className="lg:hidden flex-shrink-0">
                    <img className="size-12 rounded-full"
                      src={ImageFlavia}
                      alt="Imagem" />
                  </div>
                  <div className="ms-4 lg:ms-0">
                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                      Flavia Lima
                    </p>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Fonoaudiologa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:hidden">
                <div className="flex items-center">
                  <div className="lg:hidden flex-shrink-0">
                    <img className="size-12 rounded-full"
                      src={ImageAmanda}
                      alt="Imagem" />
                  </div>
                  <div className="ms-4 lg:ms-0">
                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                    Jéssica
                    </p>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Fonoaudiologa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:hidden">
                <div className="flex items-center">
                  <div className="lg:hidden flex-shrink-0">
                    <img className="size-12 rounded-full"
                      src={ImageJesica}
                      alt="Imagem" />
                  </div>
                  <div className="ms-4 lg:ms-0">
                    <p className="font-medium text-gray-800 dark:text-neutral-200">
                    Jéssica
                    </p>
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                      Fonoaudiologa
                    </p>
                  </div>
                </div>
              </div>


              
            </blockquote>

          </div>

        </div>

      </div>
    </div>
  )
}
