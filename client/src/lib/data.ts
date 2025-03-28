export interface Dream {
  id: number;
  title: string;
  category: string;
  content: string;
  collaborators: string[];
}

export const dreams: Dream[] = [
  {
    id: 1,
    title: "I saw Leonardo Da Vinci",
    category: "Arts",
    content: "I found myself in a vast open field, the sky painted in golden hues. As I looked up, birds glided effortlessly, their wings slicing through the wind. But among them was something unnatural—machines, flapping like living creatures. Suddenly, I was standing beside Leonardo Da Vinci himself, his eyes filled with wonder as he sketched furiously in his notebook.\n\n\"These are my flying machines,\" he whispered, not looking up from his work. \"I've dreamed of them for years.\"\n\nI watched as his drawings came to life before our eyes, lifting off the page and joining the birds in the sky. Leonardo smiled, his weathered face brightening. \"Man was meant to fly,\" he said. \"We just needed time to remember how.\"\n\nAs the sun began to set, Leonardo turned to me and placed his notebook in my hands. \"Continue where I left off,\" he said. \"The future needs dreamers who can see beyond the possible.\"\n\nWhen I woke, I could still feel the weight of his notebook in my hands and the responsibility of his words in my heart.",
    collaborators: ["Art History", "Engineering", "Aviation"]
  },
  {
    id: 2,
    title: "The Quantum Breakthrough",
    category: "Science",
    content: "In my dream, I was working in a laboratory filled with humming equipment. Equations floated in the air, visible and tangible like holographic projections. As I reached out to touch them, they rearranged themselves into new patterns, revealing solutions to problems I'd been struggling with for years.\n\nA figure appeared beside me – it was Niels Bohr, one of the fathers of quantum mechanics. He nodded approvingly as I manipulated the equations.\n\n\"You've found the bridge between quantum mechanics and gravity,\" he said quietly. \"The unified theory everyone has been searching for.\"\n\nHe handed me a small device, no larger than a coin. \"This will change everything,\" he explained. \"Unlimited clean energy, instantaneous communication across any distance, even the ability to manipulate time itself.\"\n\nI woke with a clear understanding of the principles behind quantum entanglement that I had never considered before. The equations were already fading, but the core concept remained.",
    collaborators: ["Quantum Physics", "Mathematical Modeling", "Clean Energy Research"]
  },
  {
    id: 3,
    title: "The Borderless Currency",
    category: "Finance",
    content: "I found myself standing in the middle of a busy marketplace where no physical money changed hands. People from all nations were trading goods and services using a universal digital currency that somehow reflected true value rather than arbitrary worth.\n\nAn elderly woman approached me, her eyes reflecting wisdom beyond her years. She introduced herself as the architect of this new financial system.\n\n\"We've eliminated the artificial barriers between economies,\" she explained. \"No more exchange rates, no more financial borders, no more currencies manipulated for political gain.\"\n\nShe showed me a transparent ledger that everyone could access – corruption had nowhere to hide. Resources flowed where they were needed most efficiently. Artists and farmers were valued as highly as bankers and tech developers.\n\n\"The system adapts to ensure no one can hoard or manipulate it,\" she said. \"It values sustainability and human dignity above all.\"\n\nWhen I woke, I had ideas for a new financial platform that could start us on this path.",
    collaborators: ["Financial Systems", "Blockchain Development", "Economic Policy"]
  },
  {
    id: 4,
    title: "The Olympic Revolution",
    category: "Sports",
    content: "I dreamed I was at the Olympics, but not as we know them today. Athletes from around the world were competing in events that measured not just physical prowess, but how their training had benefited their communities.\n\nA runner was celebrated not just for her speed, but for how she had transformed her training routes into community gardens. A swimmer was honored for developing water purification techniques while perfecting his stroke.\n\n\"We've redefined what athletic excellence means,\" explained the head of the Olympic committee, showing me around. \"It's not just about who's fastest or strongest, but who uses their abilities to lift others.\"\n\nThe medals were made from reclaimed materials, and instead of national anthems, each winner shared their story and vision for the future. There were no countries, only communities.\n\n\"The true spirit of sport isn't about division,\" the committee head said. \"It's about pushing human potential for the benefit of all.\"\n\nI woke with ideas for a new community sports program that emphasizes environmental and social benefits.",
    collaborators: ["Sports Management", "Community Development", "Sustainable Design"]
  },
  {
    id: 5,
    title: "The Parliament of Ages",
    category: "Governance",
    content: "In my dream, I witnessed a gathering like no other – a global parliament where elected representatives came from three distinct groups: youth delegates representing the future, adults representing the present, and elders representing wisdom and historical perspective.\n\nDecisions required consensus from all three groups, ensuring that no generation could sacrifice another's interests. The parliament hall was circular, with no raised platforms or special seats – all were equal in voice and position.\n\n\"We've found that when generations must reach consensus, they create solutions that are both innovative and sustainable,\" explained one facilitator. \"The young bring boldness, the adults bring practicality, and the elders bring context.\"\n\nI was shown technology that allowed citizens to participate actively in deliberations, not just through voting but through ongoing dialogue with their representatives. Transparency was absolute – all discussions were public, all data accessible.\n\n\"Governance is a conversation, not a monologue,\" the facilitator said. \"And everyone deserves a voice in that conversation.\"\n\nI awoke with a framework for a multi-generational community council in mind.",
    collaborators: ["Political Science", "Intergenerational Studies", "Digital Democracy"]
  }
];
