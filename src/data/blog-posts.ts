import oneCupCover from "@/assets/blog/one-cup-one-story-launching-a-new-space-for-connection/cover.jpeg";
import top10Cover from "@/assets/blog/top-10-mistakes-to-avoid-when-starting-a-business/cover.jpg";
import decisionsCover from "@/assets/blog/how-to-make-decisions-in-times-of-uncertainty/cover.jpg";
import rejectionCover from "@/assets/blog/get-used-to-rejection/cover.jpg";
import heartCover from "@/assets/blog/leading-with-heart-the-secret-sauce-to-transforming-workplace-culture/cover.png";

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  author: string;
  readTime: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "one-cup-one-story-launching-a-new-space-for-connection",
    title: "Discover the Power of Connection: “One Cup, One Story”",
    date: "2025-04-21",
    dateLabel: "April 21, 2025",
    author: "Tamara Medina Sapovalova",
    readTime: "3 min read",
    excerpt: "There is profound power in slowing down. Imagine sitting across from someone, holding a warm cup of coffee, and listening to a real, unfiltered story — that's where One Cup, One Story began.",
    cover: oneCupCover,
    coverAlt: "One Cup, One Story",
    body: [
      { type: "paragraph", text: "In a world that often demands we be constantly productive, fast, and planned, there is profound power in slowing down. Imagine sitting across from someone, holding a warm cup of coffee, and listening to a real, unfiltered story. This is where true connection happens." },
      { type: "heading", level: 2, text: "Why This Series?" },
      { type: "paragraph", text: "We believe that stories are the threads that connect us. Often, we see the polished version of people—their successes, their milestones, the “perfect” outcomes. But the real magic, the true inspiration, lies in what happens between us. It’s in the vulnerability of sharing doubts, the raw courage of taking the first step, and the reality of navigating uncertainty." },
      { type: "paragraph", text: "This series is designed to be a space where coffee is just the catalyst. It’s a space for inspiration, shared experiences, and open, honest conversation." },
      { type: "heading", level: 3, text: "The Importance of Storytelling" },
      { type: "paragraph", text: "Storytelling is an ancient art. It has the power to heal, inspire, and unite. When we share our stories, we invite others into our world. We create a bridge of understanding and empathy. Have you ever felt that rush of connection when someone shares their truth? It’s a reminder that we are not alone in our struggles and triumphs." },
      { type: "heading", level: 3, text: "Our First Guest: Marie Marešová" },
      { type: "paragraph", text: "We couldn't have asked for a more authentic beginning than our first guest, Marie Marešová. Marie is a testament to the power of intuition. Without a rigid, long-term plan, she took a leap of faith to open her own roastery and café. Her journey hasn't been without its challenges, but it is precisely those moments of doubt and crucial pivots that make her story so compelling." },
      { type: "paragraph", text: "Whether you are an aspiring entrepreneur, someone looking for inspiration, or simply someone who values genuine human connection, this evening is for you. Marie's story will resonate with anyone who has ever faced uncertainty." },
      { type: "heading", level: 2, text: "Join Us for the First Chapter" },
      { type: "paragraph", text: "We are opening the doors to create a space for honest dialogue—a place where you can feel at home and leave feeling inspired." },
      { type: "list", ordered: false, items: [
        "When: April 28, at 18:00",
        "Where: Amáres coffee - pražírna kávy Poděbrady, Husova 24/11, 290 01 Poděbrady 1, Czechia",
        "The Vibe: Informal, open, and human.",
      ] },
      { type: "paragraph", text: "Don't miss the chance to be part of the very first chapter of this series. Sometimes, all it takes is one story to change the way you see your own path forward." },
      { type: "paragraph", text: "Come for the coffee, stay for the story. We can't wait to see you there." },
      { type: "heading", level: 2, text: "The Journey Ahead" },
      { type: "paragraph", text: "As we embark on this journey together, let’s reflect on what it means to share our stories. Each gathering will be a unique experience, a blend of diverse voices and perspectives. We’ll explore themes of resilience, creativity, and growth." },
      { type: "heading", level: 3, text: "Building a Community" },
      { type: "paragraph", text: "In this fast-paced world, it’s easy to feel isolated. But together, we can build a community that thrives on connection and support. Imagine a space where you can share your dreams, fears, and aspirations without judgment. A place where you can find encouragement and accountability." },
      { type: "heading", level: 3, text: "The Benefits of Connection" },
      { type: "paragraph", text: "When we connect with others, we open ourselves up to new possibilities. We gain insights that can help us navigate our paths. Have you ever found clarity after a meaningful conversation? That’s the power of connection. It can spark ideas, motivate action, and inspire change." },
      { type: "heading", level: 3, text: "Your Invitation to Share" },
      { type: "paragraph", text: "I invite you to bring your story to the table. What experiences have shaped you? What lessons have you learned along the way? Sharing your journey can be a powerful act of courage. It can inspire others to reflect on their own paths and find strength in vulnerability." },
      { type: "heading", level: 3, text: "Looking Forward" },
      { type: "paragraph", text: "As we look forward to our first gathering, let’s remember the importance of being present. In a world filled with distractions, taking the time to listen and share can be transformative. Let’s create a space where everyone feels valued and heard." },
      { type: "paragraph", text: "Together, we can cultivate a culture of storytelling that enriches our lives and strengthens our community." },
      { type: "paragraph", text: "Join us on this journey. Together, let’s discover the power of connection through storytelling." },
    ],
  },
  {
    slug: "top-10-mistakes-to-avoid-when-starting-a-business",
    title: "Top 10 Mistakes to Avoid When Starting a Business",
    date: "2025-03-05",
    dateLabel: "March 5, 2025",
    author: "Tamara Medina Sapovalova",
    readTime: "3 min read",
    excerpt: "Embarking on the journey of entrepreneurship is both exciting and challenging. Here are the ten hurdles new business owners face most often — and how to avoid them.",
    cover: top10Cover,
    coverAlt: "Top 10 Mistakes to Avoid When Starting a Business",
    body: [
      { type: "paragraph", text: "Embarking on the journey of entrepreneurship is both exciting and challenging. Many new business owners face hurdles that can be avoided with the right knowledge and preparation." },
      { type: "heading", level: 3, text: "1. Failing to Conduct Market Research" },
      { type: "paragraph", text: "One of the most critical mistakes is not thoroughly researching the market before launching. Understanding your target audience, competitors, and industry trends is essential to ensure your business idea is viable." },
      { type: "paragraph", text: "Tip: Take the time to gather data and analyze your market to validate your business concept." },
      { type: "heading", level: 3, text: "2. Neglecting a Solid Business Plan" },
      { type: "paragraph", text: "A well-structured business plan serves as a roadmap for your business. Many entrepreneurs skip this step, leading to a lack of direction and clarity." },
      { type: "paragraph", text: "Tip: Invest time in creating a comprehensive business plan that outlines your goals, strategies, and financial projections." },
      { type: "heading", level: 3, text: "3. Underestimating Startup Costs" },
      { type: "paragraph", text: "New business owners often underestimate the costs associated with launching their venture, leading to cash flow problems down the line." },
      { type: "paragraph", text: "Tip: Create a detailed budget that includes all potential expenses and ensure you have adequate funding to cover them." },
      { type: "heading", level: 3, text: "4. Ignoring Legal and Regulatory Requirements" },
      { type: "paragraph", text: "Starting a business involves compliance with various legal and regulatory requirements. Failing to address these can lead to fines or even closure." },
      { type: "paragraph", text: "Tip: Research the necessary permits, licenses, and regulations applicable to your industry and location." },
      { type: "heading", level: 3, text: "5. Choosing the Wrong Business Structure" },
      { type: "paragraph", text: "Selecting the wrong business structure (e.g., sole proprietorship, LLC, corporation) can have significant financial and legal implications." },
      { type: "paragraph", text: "Tip: Consult with a legal or financial advisor to choose a structure that aligns with your business goals and protects your personal assets." },
      { type: "heading", level: 3, text: "6. Overlooking Marketing and Branding" },
      { type: "paragraph", text: "Many new entrepreneurs focus solely on product development and neglect the importance of marketing and branding. Without visibility, even the best products can fail." },
      { type: "paragraph", text: "Tip: Develop a marketing strategy early on to create awareness and attract customers to your brand." },
      { type: "heading", level: 3, text: "7. Trying to Do Everything Alone" },
      { type: "paragraph", text: "Starting a business can be overwhelming, and many entrepreneurs make the mistake of trying to handle everything themselves." },
      { type: "paragraph", text: "Tip: Build a support network, delegate tasks, and consider hiring professionals to help with areas where you lack expertise." },
      { type: "heading", level: 3, text: "8. Ignoring Customer Feedback" },
      { type: "paragraph", text: "Customer feedback is invaluable for improving your products and services. Many new business owners dismiss this feedback, missing opportunities for growth." },
      { type: "paragraph", text: "Tip: Actively seek and listen to customer feedback to continuously improve your offerings and customer experience." },
      { type: "heading", level: 3, text: "9. Failing to Network" },
      { type: "paragraph", text: "Networking is crucial for building relationships that can lead to partnerships, mentorship, and growth opportunities. Many new entrepreneurs underestimate its importance." },
      { type: "paragraph", text: "Tip: Attend industry events, engage with your community, and connect with other entrepreneurs to expand your network." },
      { type: "heading", level: 3, text: "10. Being Afraid to Pivot" },
      { type: "paragraph", text: "Sometimes, an initial business idea may not resonate with the market. Many entrepreneurs are hesitant to pivot their strategy, fearing failure." },
      { type: "paragraph", text: "Tip: Stay open to change and be willing to adapt your business model based on market feedback and evolving trends." },
      { type: "heading", level: 3, text: "Final Thoughts: Setting Yourself Up for Success" },
      { type: "paragraph", text: "Avoiding these common mistakes can significantly increase your chances of success as a new entrepreneur. By conducting thorough research, creating a solid business plan, and remaining adaptable, you can set yourself up for a successful journey in entrepreneurship. Remember, learning from the experiences of others can save you time and resources. Embrace the challenges, stay informed, and keep pushing forward!" },
      { type: "paragraph", text: "Don’t just learn from your own mistakes—learn from others too!" },
      { type: "paragraph", text: "Join our upcoming Business Building Blocks Programme to learn everything you need to grow your business. This is a 3-month program designed for aspiring and established entrepreneurs. With a mix of live workshops and self-paced learning, you'll gain tools to scale your business, refine your strategy, and accelerate growth." },
    ],
  },
  {
    slug: "how-to-make-decisions-in-times-of-uncertainty",
    title: "How to Make Decisions in Times of Uncertainty",
    date: "2025-02-27",
    dateLabel: "February 27, 2025",
    author: "Tamara Medina Sapovalova",
    readTime: "2 min read",
    excerpt: "Your life is like a book; every page is a day, every chapter is a year. As long as your life is not a best-seller, every day you have the opportunity to rewrite your story.",
    cover: decisionsCover,
    coverAlt: "Vintage compass, guiding the way",
    body: [
      { type: "paragraph", text: "The other day, I came across a phrase that truly resonated with me:" },
      { type: "quote", text: "Your life is like a book; every page is a day, every chapter is a year. As long as your life is not a best-seller, every day you have the opportunity to rewrite your story." },
      { type: "paragraph", text: "Yet, often the pages and chapters we've left behind weigh heavily on us, instilling a fear of uncertainty. Are you on the brink of starting a new business or embarking on a new career? Do you find yourself at a crossroads, unsure of which path to take? Perhaps you know what you want to do, but fear and uncertainty have left you paralyzed." },
      { type: "paragraph", text: "However, when we reflect on our decisions, we often realize that we gain far more than we lose. The only way to grow and experience the unimaginable is to step outside our comfort zones." },
      { type: "paragraph", text: "One of my clients, a professional diver, once shared with me:" },
      { type: "quote", text: "The more time I spent on the edge of the abyss, thinking about it, the more terror I felt. But if I stopped overthinking it (contemplating my fear), jumping became much easier." },
      { type: "paragraph", text: "So, the next time you find yourself at a crossroads, don’t hesitate—follow your instincts and take the leap! A world of opportunities and adventures awaits you." },
      { type: "paragraph", text: "Here are some strategies to help you navigate uncertainty:" },
      { type: "list", ordered: true, items: [
        "There Are No Bad Decisions: Even what we label as “bad decisions” can be reframed as valuable experiences. The toughest challenges often yield the greatest lessons, as long as we focus on what we can learn.",
        "Pros vs. Cons: Grab two sheets of paper and list the pros on one and the cons on the other. This simple exercise can provide clarity when your thoughts feel tangled.",
        "Reflect on Past Uncertainties: Think back to moments in your life when you faced uncertainty—your first job, becoming a parent, moving cities, or experiencing heartbreak. Consider what you learned from these experiences and focus on the positive outcomes.",
        "Trust Your Instincts: While it may sound cliché, our instincts often know what we need to do. Too often, we ignore our inner voice, which guides us toward what we truly need, rather than what we want.",
      ] },
      { type: "paragraph", text: "Embrace the uncertainty and rewrite your story!" },
    ],
  },
  {
    slug: "get-used-to-rejection",
    title: "Embracing Rejection as an Entrepreneur: A Path to Resilience",
    date: "2019-05-23",
    dateLabel: "May 23, 2019",
    author: "Tamara Medina Sapovalova",
    readTime: "2 min read",
    excerpt: "“It is not personal; it is only business.” However, there is nothing more personal than business. Here's what learning to sit with rejection actually taught me.",
    cover: rejectionCover,
    coverAlt: "Photo by @steve_j",
    body: [
      { type: "paragraph", text: "One of the things an entrepreneur must learn is to “get used to rejection.” There is a phrase that says, “It is not personal; it is only business.” However, there is nothing more personal than business." },
      { type: "paragraph", text: "Whether in our careers, business, or personal relationships, we had all experienced rejection at some point." },
      { type: "paragraph", text: "I think what makes it difficult is the lack of response—the silence—not to affect us. It would be much better if people said, “It is not possible, it is not for me, not now,” rather than greeting us with a wall of silence." },
      { type: "paragraph", text: "One of the things I have learned is not to give up. It's worth making at least a few attempts. Many times, people genuinely could not respond as they were on holiday and forgot to put an out-of-office reply, or the email went into the spam folder. (I have stopped counting how many times I have found emails and messages lost in the virtual space.)" },
      { type: "paragraph", text: "The priorities of others differ from ours; for them, what is often vital to us may not hold the same importance." },
      { type: "paragraph", text: "It’s impossible to know the reasons why people behave in certain ways. However, generally, what we imagine is a hundred times worse than reality. We create our narratives about the reasons someone did not respond to us when, in fact, the reality is often much simpler." },
      { type: "paragraph", text: "Next time someone does not answer you, try again. Remember, you already have the “no.” You can view this as an exercise in resilience, humility, and strength; you may even encounter a pleasant surprise." },
      { type: "paragraph", text: "However, it's also good to remind ourselves that forcing things never works." },
      { type: "paragraph", text: "And as they say, when one door closes, two more open." },
      { type: "paragraph", text: "Or, even better, you can create your own doors…" },
      { type: "paragraph", text: "How did you turn rejection into an opportunity?" },
    ],
  },
  {
    slug: "leading-with-heart-the-secret-sauce-to-transforming-workplace-culture",
    title: "Leading with Heart: The Secret Sauce to Transforming Workplace Culture",
    date: "2025-02-08",
    dateLabel: "February 8, 2025",
    author: "Tamara Medina Sapovalova",
    readTime: "2 min read",
    excerpt: "Leading with heart isn’t just a feel-good concept; it’s a transformative approach to leadership that can revolutionize workplace culture.",
    cover: heartCover,
    coverAlt: "A heart-shaped balloon drifts peacefully against a vibrant sunset sky",
    body: [
      { type: "paragraph", text: "Ah, Valentine’s Day—a time for love, connection, and maybe even a little chocolate indulgence. But what if we extend it beyond romantic relationships and into the workplace? Leading with heart isn’t just a feel-good concept; it’s a transformative approach to leadership that can revolutionize workplace culture." },
      { type: "heading", level: 3, text: "What Does It Mean to Lead with Heart?" },
      { type: "paragraph", text: "Leading with heart is about embracing empathy, compassion, and authenticity in your leadership style. It’s about genuinely caring for the people you work with. This approach fosters trust, encourages open communication, and creates a sense of belonging among team members." },
      { type: "paragraph", text: "Think of it as the workplace equivalent of a great relationship: mutual respect, active listening, and a shared vision for the future. Leaders who lead with heart don’t just manage people—they inspire them." },
      { type: "heading", level: 3, text: "The Ripple Effect on Workplace Culture" },
      { type: "paragraph", text: "The impact on workplace culture is nothing short of magical. Here’s how:" },
      { type: "list", ordered: true, items: [
        "Increased Employee Engagement: Employees who feel valued and understood are more likely to be engaged in their work. Leadership behaviors directly influence employee engagement, creating a more motivated and productive workforce.",
        "A Positive Work Environment: Compassionate leadership sets the tone for a supportive and inclusive workplace. Open communication, shared values, and professional growth opportunities thrive under heart-centered leadership.",
        "Enhanced Creativity and Innovation: When people feel safe and supported, they’re more likely to take risks and think outside the box. Leading with heart unlocks creativity and purpose, driving results that benefit both the team and the organization.",
        "Stronger Team Bonds: Just like in any great relationship, trust and connection are the glue that holds a team together. Leading with heart fosters these bonds, creating a culture where collaboration and mutual support are the norm.",
      ] },
      { type: "heading", level: 3, text: "Love and Leadership: A Match Made in Heaven" },
      { type: "paragraph", text: "Speaking of relationships, let’s take a moment to draw a parallel between leading with heart and the world of online dating. The same principles apply to heart-centered leadership: authenticity, clear communication, and a willingness to invest in relationships are key to success. Just like finding the perfect match, leading with heart requires effort and intentionality. But the rewards—a thriving workplace culture and a team that feels genuinely cared for—are well worth it." },
      { type: "heading", level: 3, text: "How to Start Leading with Heart Today" },
      { type: "paragraph", text: "Here are a few simple ways to start leading with heart:" },
      { type: "list", ordered: false, items: [
        "Listen Actively: Show your team their voices matter by truly listening.",
        "Show Appreciation: A heartfelt “thank you” can go a long way in making people feel valued.",
        "Be Transparent: Authenticity builds trust, so don’t be afraid to share your challenges and vulnerabilities.",
        "Prioritize Well-Being: Encourage work-life balance and create an environment where mental health is a priority.",
      ] },
      { type: "paragraph", text: "Leading with heart isn’t just a leadership style; it’s a commitment to creating a culture where people feel seen, heard, and valued. And just like any great love story, it starts with a little vulnerability and a lot of heart." },
      { type: "paragraph", text: "This Valentine’s Day, channel your inner Cupid and spread the love." },
    ],
  },
];
