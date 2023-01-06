let positiveAffirmations = ['I am successful.', 'I am confident.',
    'I am powerful.',
    'I am strong.',
    'I am getting better and better every day.',
    'All I need is within me right now.',
    'I wake up motivated.',
    'I am an unstoppable force of nature.',
    'I am a living, breathing example of motivation.',
    'I am living with abundance.',
    'I am having a positive and inspiring impact on the people I come into contact with.',
    'I am inspiring people through my work.',
    'I\’m rising above the thoughts that are trying to make me angry or afraid.',
    'Today is a phenomenal day.',
    'I am turning DOWN the volume of negativity in my life, while simultaneously turning UP the volume of positivity.'];

function newAffirmation() {
    const randomAffirmation = Math.floor(Math.random() * (positiveAffirmations.length));
    document.getElementById('affirmation-display').innerHTML = positiveAffirmations[randomAffirmation];
}

