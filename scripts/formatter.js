let text = `Jude, a servant of Jesus Christ and a brother of James, to those who are called and sanctified by God the Father, and kept for Jesus Christ:
Mercy, peace, and love be multiplied to you.
Beloved, although I was quite eager to write to you about our common salvation, I found it necessary to write to you and urge you to contend for the faith that was once for all delivered to the saints.
For certain men whose condemnation was written about long ago have crept in unnoticed. They are ungodly men who pervert the grace of our God, turning it into a license for sensuality. By doing so, they deny God, who is our only Master, and also the Lord Jesus Christ.
Now I want to remind you, although you already know this, that after the Lord saved a people out of the land of Egypt, he subsequently destroyed those who did not believe.
And the angels who did not keep within their proper domain, but left their own dwelling, he has kept under darkness in everlasting chains for the judgment of the great day.
Likewise, Sodom and Gomorrah and the cities around them, who indulged in fornication and went after strange flesh in a manner similar to those angels, serve as an example by undergoing the punishment of eternal fire.
In the same way these ungodly men, relying on their dreams, defile the flesh, reject authority, and revile glorious beings.
But when Michael the archangel was contending with the devil and disputing about the body of Moses, he did not dare to bring a reviling judgment against him, but said, “May the Lord rebuke yoʋ!”
Yet these men slander whatever they do not understand, and they are corrupted by what they, like irrational beasts, instinctively comprehend.
Woe to them! For they went in the way of Cain, they rushed for reward to the error of Balaam, and they perished in the rebellion of Korah.
These men are hidden reefs at your love feasts, feeding themselves as they feast among you without fear. They are clouds without water, carried along by winds; fruitless trees in late autumn, twice dead and uprooted.
They are wild waves of the sea, foaming out their own shameful deeds; wayward stars, for whom the thick gloom of darkness has been reserved forever.
Enoch, in the seventh generation from Adam, prophesied about these men, saying, “Behold, the Lord is coming with thousands upon thousands of his holy ones
to execute judgment against all and to convict all the ungodly among them of all their ungodly deeds that they have done in an ungodly way, and to convict ungodly sinners of all the harsh words they have spoken against him.”
These men are grumblers and complainers, walking according to their own lusts. They speak bombastic words with their mouths, admiring people for their own advantage.
But you, beloved, must remember what the apostles of our Lord Jesus Christ foretold,
how they said to you, “In the end times there will be scoffers who walk according to their own ungodly lusts.”
These people cause divisions; they are worldly and do not have the Spirit.
But you, beloved, by building yourselves up in your most holy faith and praying in the Holy Spirit,
must keep yourselves in the love of God as you wait for the mercy of our Lord Jesus Christ that leads to eternal life.
Have mercy on some, using discernment;
and others save with fear by snatching them out of the fire, hating even the garment that is stained by the flesh.
Now to him who is able to keep them from falling and to make them stand unblemished in the presence of his glory with great joy,
to the only wise God our Savior, be glory and majesty, power and authority, both now and forevermore. Amen.

`;

let lines = text.split("\n");
let data = [];

for (let i = 0; i < lines.length; i++) {
	if (lines[i]) {
		// ignore empty lines
		data.push({
			isRed: false,
			verse: i + 1,
			text: lines[i],
		});
	}
}

console.log(JSON.stringify(data, null, 2));
