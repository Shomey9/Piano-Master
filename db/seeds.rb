puts "Seeding Users"
User.create!([
    {
        username: "Woobly",
        password: "sam"
    },
    {
        
        username: "Flatiron",
        password: "learn"
    },
    {
        username: "Shomey9",
        password: "pokeemon12"
    }
])


puts "Seeding Scores"
Score.create!([
    {   
        points: 30
    },
    {
        points: 50
    },
    {
        points: 70
    }
])

puts "Seeding Records"
UserScore.create!([
    {   
        username: "Woobly",
        points: 70
    },
    {   
        username: "Flatiron",
        points: 50
    },
    {
        username: "Anonymous",
        points: 30
    }
])