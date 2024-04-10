import React from 'react'
import exampleimage from './assets/Logo.png'
export default function Blog() {
    return (
      <div className="bg-gray-1000">
        <div className="relative">
          <div className="absolute inset-0">
            <img
              alt="Background"
              className="object-cover w-full h-full"
              height={400}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD5x-xd-QHlHIrzGgLtnPJ-4L9n2OoNNkU0g&usqp=CAU"
              src="{exampleimage}"
              style={{
                aspectRatio: "1440/400",
                filter: "blur(20px)",
                objectFit: "cover",
              }}
              width={1440}
            />
          </div>
          <div className="relative z-10">
            <div className="px-4 py-12 md:py-16 md:px-6 lg:py-20 xl:py-24">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-2">
                  <div className="text-center">
                    {/* <span className="inline-block rounded-lg bg-gray-600 px-3 py-1 text-sm font-semibold dark:bg-gray-400/50 dark:text-gray-900/70">
                      Blog
                    </span> */}
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl sm:tracking-tighter/2">
                      Avighna Creations: the best of your memories
                    </h1>
                    {/* <p className="text-black-500">
                      Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his
                      throne. One day, his advisors came to him with a problem: the kingdom was running out of money.
                    </p> */}
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-lg overflow-hidden aspect-video">
                  <img
                    alt="image"
                    className="object-cover w-full h-full"
                    // height={340}
                    src= {exampleimage}
                    style={{
                      aspectRatio: "600/340",
                      objectFit: "cover",
                    }}
                    // width={600}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-gray-1000 border-t border-gray-900 dark:border-gray-50">
          <div className="px-4 py-6 md:py-12 md:px-6 lg:py-16">
            <article className="prose prose-gray max-w-6xl mx-auto dark:prose-invert">
              <div className="space-y-2 not-prose">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Avighna creations: the best for your memories
                </h1>
                <a href = "www.google.com"><u> link for the blog </u></a>
                <p className="text-gray-500 dark:text-gray-400">Posted on March 23, 2024</p>
              </div>
              <p >
              <div style = {{fontSize: '24px'}} >
                <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg p-6">
              Our team at Avighna Creations is driven by a passion for creating magical experiences
that go beyond the ordinary. From the moment you entrust us with your vision, we
embark on a journey to bring it to life with creativity, attention to detail, and a touch of
emotion that sets us apart.
Here's how we turn your event into an unforgettable affair:<br></br>
● Weddings:
Your wedding day is more than just an event; it's a milestone in your love story. At
Avighna Creations, we understand the significance of this day and strive to make it truly
unforgettable. From the small details to the grand gestures, we work tirelessly to ensure
that your wedding reflects your unique love story and vision. Whether you dream of an
intimate ceremony or a lavish celebration, we are committed to turning your dreams into
reality, creating a day filled with love, joy, and cherished memories
<br></br>
● Parties:
Every milestone deserves a celebration as unique as you are. At Avighna Creations, we
specialise in creating personalised parties that reflect your style and personality.
Whether you're celebrating a birthday, anniversary, or any other special occasion, our
team of event experts will work closely with you to design a one-of-a-kind party
experience that leaves a lasting impression on you and your guests. From thematic
décor to customised entertainment, we ensure that every aspect of your party is carefully
curated to exceed your expectations.<br></br>
● Corporate Events:
In the corporate world, making a lasting impression is essential. At Avighna Creations,
we understand the importance of corporate events in fostering relationships and driving
business success. Our team of experienced event planners will work closely with you to
design and execute professional, polished, and innovative corporate events that reflect
your brand identity and leave a lasting impression on your clients, partners, and
employees.<br></br>
● Destination Weddings:
Your wedding day is an opportunity to embark on a magical journey with the one you
love. At Avighna Creations, we specialise in creating unforgettable destination weddings
in enchanting locations. We'll work closely with you to bring your dream wedding to life in
a stunning and unforgettable setting. With our expertise in destination wedding planning,
you can relax and enjoy every moment of your special day while we take care of all the
details, ensuring a seamless and stress-free experience from start to finish.<br></br>
● Photos & Videos:
Your special moments deserve to be captured beautifully and preserved for a lifetime. At
Avighna Creations, we understand the importance of photography and videography in
preserving the memories of your event. Our team of talented photographers and
videographers will artfully document every moment, from the heartfelt exchanges of
vows to the joyous celebrations with friends and family. With our keen eye for detail and
commitment to excellence, we'll ensure that your photos and videos not only capture the
essence of your event but also evoke emotions and memories for years to come.<br></br>
● Makeup & Hairstyling:
On your special day, you deserve to look and feel your absolute best. At Avighna
Creations, our team of professional makeup artists and hairstylists specialize in creating
stunning looks that enhance your natural beauty and reflect your unique style. Whether
you prefer a classic and timeless look or something more modern and glamorous, we'll
work closely with you to create a personalized look that complements your features and
enhances your confidence. With our expertise in makeup and hairstyling, you can relax
and enjoy the pampering experience, knowing that you're in capable hands.<br></br>
At Avighna Creations, we believe that every event is an opportunity to create memories
that lasts a lifetime. Let us be a part of your special day and turn your vision into reality!
</div>
</div>
              </p>
            </article>
          </div>
        </div>
      </div>
    )
  }
  
  