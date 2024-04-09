import React from 'react'
import Image from "next/image";
import Button from "@/components/Button";

const Hero = () => {
  return (
      <section className={'max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'}>

          <div className={"hero-map"}></div>

          {/*LEFT*/}
          <div className={"relative z-20 flex flex-1 flex-col xl:w-1/2"}>
              <h1 className={'bold-52 lg:bold-88  cursor-default'}>App</h1>
              <p className={'regular-16 mt-6 text-gray-30 xl:max-w-[520px] cursor-default'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar ligula quis ipsum suscipit euismod. Nullam feugiat rhoncus urna tincidunt malesuada. Vivamus ornare eu velit et congue. Nam tristique varius ex, ut elementum urna gravida non. Ut consequat ligula et velit maximus, sit amet sagittis quam laoreet. Cras congue vel dolor et interdum. Vestibulum lacinia velit justo, eget rutrum leo venenatis id. Duis at vulputate odio. Etiam dictum arcu erat, ut malesuada est facilisis vel. Duis sodales consequat metus, nec consequat ligula egestas vel. Mauris tempor hendrerit lectus, ac sollicitudin ipsum commodo id. Sed eu faucibus nibh. Sed venenatis fermentum diam, tempus ultricies dolor varius eu.
              </p>
              <div className={"my-11 flex flex-wrap gap-5"}>
                  <div className={"flex items-center gap-2 "}>
                      {Array(5).fill(1).map((_, index) => (
                          <Image
                            src={"/star.svg"}
                            key={index}
                            alt={"star"}
                            width={24}
                            height={24}
                          />
                          ))}
                  </div>

                  <p className={"bold-16 lg:bold-20 text-blue-70  cursor-default"}>
                      198k
                      <span className={"regular-16 lg:regular-20 ml-1"}>Excellent Reviews</span>
                  </p>
              </div>
              <div className={"flex w-full gap-3 sm:flex-row"}>
                  <Button
                      type={"button"}
                      title={"Download App"}
                      variant={"btn_green"}
                  />
                  <Button
                      type={"button"}
                      title={"How we work?"}
                      icon={"/play.svg"}
                      variant={"btn_white_text"}
                  />
              </div>
          </div>

          <div className={"relative flex flex-1 items-start cursor-default"}>
              <div className={"relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8"}>
                  <div className={"flex flex-col"}>
                      <div className={"flexBetween"}>
                          <p className={"regular-16 text-gray-20"}>Location</p>
                          <Image src={"/close.svg"} alt={"close"} width={24} height={24}/>
                      </div>
                      <p className={"bold-20 text-white"}>Rotterdam</p>

                      <div className={"flexBetween"}>
                          <div className={"flex flex-col"}>
                              <p className={"regular-16 block text-gray-20"}>Distance</p>
                              <p className={"bold-20 text-white"}>173 km</p>
                          </div>
                          <div className={"flex flex-col"}>
                              <p className={"regular-16 block text-gray-20"}>Cost</p>
                              <p className={"bold-20 text-white"}> € 3,70 </p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>

      </section>
  )
}

export default Hero