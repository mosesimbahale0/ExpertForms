import { LoaderFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';

// Define the Post type
interface Post {
  post_id: number;
  user_id: number;
  title: string;
  content: string;
  cover_image: string;
  created_at: string;
}

// Sample posts array
const posts: Post[] = [
  {
    post_id: 1,
    user_id: 1,
    title: 'My first post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-27T10:00:00Z',
  },
  {
    post_id: 2,
    user_id: 2,
    title: 'My second post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-26T14:30:00Z',
  },
  {
    post_id: 3,
    user_id: 1,
    title: 'My third post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-25T18:45:00Z',
  },
  {
    post_id: 4,
    user_id: 2,
    title: 'My fourth post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-24T22:00:00Z',
  }, {
    post_id: 5,
    user_id: 1,
    title: 'My fifth post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-23T08:15:00Z',
  },
  {
    post_id: 6,
    user_id: 2,
    title: 'My sixth post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-22T11:30:00Z',
  },
  {
    post_id: 7,
    user_id: 1,
    title: 'My seventh post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-21T15:45:00Z',
  },
  {
    post_id: 8,
    user_id: 2,
    title: 'My eighth post',
    content: 'Fruitcake jujubes jelly beans croissant gummi bears biscuit. Oat cake dessert fruitcake carrot cake jelly-o biscuit. Tootsie roll marshmallow cotton candy icing cookie halvah tootsie roll cake. Tiramisu jelly chocolate shortbread powder. Donut icing donut biscuit pie biscuit soufflé jujubes jelly. Ice cream donut donut pastry icing candy lemon drops. Macaroon sweet roll tart sesame snaps marshmallow jelly chocolate cake jelly. Gingerbread cotton candy icing jujubes liquorice sesame snaps. Tiramisu wafer cake danish bear claw pudding sweet roll gummi bears pie. Soufflé tart sweet biscuit halvah toffee cake muffin. Bonbon candy canes bear claw gummies cupcake tiramisu. Apple pie jelly-o pie tootsie roll chupa chups icing chocolate bar macaroon. Sugar plum topping danish lollipop sugar plum chocolate cake. Shortbread chocolate cake muffin wafer biscuit cotton candy.',
    cover_image: "/Gemini_Generated_Image_tkiqw1tkiqw1tkiq.jpeg",
    created_at: '2023-10-20T19:00:00Z',
  },
];

export default function AllPosts() {
  // Use the sample posts data for now
  return (
    <div className='flex flex-col lg:flex-row flex-wrap  text-accent text-left w-full '>

      {posts.map((post) => (
        <div key={post.post_id} className='w-full lg:w-1/4 text-text2 text-left '>



          < div className='p-2  transition duration-300 ease-in-out hover:bg-secondary hover:cursor-pointer hover:shadow-md'>




            <Link to="/post/1" className='hover:bg-secondary hover:cursor-pointer w-full flex flex-col '>
              <img src={post.cover_image} alt={post.title} className='w-full  h-64 object-cover hover:scale-105 transition duration-300 ease-in-out ' />
              <div className='flex flex-col gap-2 py-4 '>
                <h2 className='text-xl font-medium text-text w-full truncate .... '>{post.title}</h2>
                <p className='w-full truncate .... text-xs'>{post.content}</p>

                <div className='flex flex-row gap-2'>
                  <div className=' flex flex-row gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2" /></svg>
                    <p className='text-xs'>
                      19k Comments
                    </p>
                  </div>
                  <div className=' flex flex-row gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z" /></svg>
                    <p className='text-xs'>
                      12k Reads
                    </p>
                  </div>
                </div>
              </div>
            </Link>



          </div>



        </div>
      ))}
    </div>


  );
}
