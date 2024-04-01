import React from 'react';

const EventComponent = ({ number, eventName, imageUrl, content }) => {
  return (
    <div className="flex flex-col items-center mb-8 w-full md:w-1/2 lg:w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg p-6">
      <div className="bg-white text-purple-600 text-4xl font-bold rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {number}.
      </div>
      <h2 className="text-3xl font-semibold text-white mb-6">{eventName}</h2>
      <img
        src={imageUrl}
        alt={eventName}
        className="w-4/5 h-128 object-cover rounded-lg mb-6"
      />
      <p className="text-white leading-relaxed text-lg max-w-4xl">{content}</p>
    </div>
  );
};

const OurServices = () => {
  const events = [
    {
      number: 1,
      eventName: 'Wedding',
      imageUrl: 'https://imgs.search.brave.com/Prx5iwVKaMrLKASYMgMcCuiNleBDri6TkCFiw_Tynh8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mYXJt/NjYuc3RhdGljLmZs/aWNrci5jb20vNjU1/MzUvNTEwMTQ5NTI5/MDZfOGM5M2I4Yjcy/My5qcGc',
      content: 'In Indian culture, weddings are not just events; they are grand celebrations that involve various rituals and ceremonies, each adding its charm to the occasion. At AvighnaCreations, we understand and honor these cultural traditions, ensuring that every aspect of your Indian wedding is executed with authenticity and finesse. Let us explore some of the key events that typically unfold during an Indian wedding'
    },
    {
      number: 2,
      eventName: 'Event Two',
      imageUrl: 'https://via.placeholder.com/800x600',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      number: 3,
      eventName: 'Event three',
      imageUrl: 'https://via.placeholder.com/800x600',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      number: 4,
      eventName: 'Event four',
      imageUrl: 'https://via.placeholder.com/800x600',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      number: 5,
      eventName: 'Event five',
      imageUrl: 'https://via.placeholder.com/800x600',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    },
    {
      number: 6,
      eventName: 'Event six',
      imageUrl: 'https://via.placeholder.com/800x600',
      content:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    }  ];

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
      {events.map((event) => (
        <EventComponent
          key={event.number}
          number={event.number}
          eventName={event.eventName}
          imageUrl={event.imageUrl}
          content={event.content}
        />
      ))}
    </div>
  );
};

export default OurServices;