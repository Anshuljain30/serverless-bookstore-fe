import { Component, EventEmitter, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  i = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  datas = [
    {
      id: 1,
      title: "Play It as It Lays by Joan Didion",
      description:
        "Play It as It Lays by Joan Didion features the best opening line since Moby Dick What makes Iago evil? Some people ask. I never ask. Didion employs tight, controlled language to convey the disturbing actions that unfold. It takes place in 1960s Hollywood and is told in first-person vignettes that will enthrall and haunt you. As a California native, Didion eloquently captures both the beauty and the danger of Southern California.",
    },
    {
      id: 2,
      title: "The Particular Sadness of Lemon Cake by Aimee Bender",
      description:
        "The Particular Sadness of Lemon Cake sounds like a metaphor, but in this book, it's both allegorical and literal, as the protagonist, a young girl, eats feelings that aren't her own. With each bite she takes, she absorbs the feelings of whoever made it. So when she bites into a lemon cake baked by her mother, she discovers that under the cheer and love, there is a deep despair. Aimee Bender is a true master when it comes to drawing us into the interior worlds of people and describing the most mundane things with such poignancy you could cry.",
    },
    {
      id: 3,
      title: "As I Lay Dying by William Faulkner",
      description:
        "What is a round of books with life-changing abilities without at least one William Faulkner shout-out? As I Lay Dying takes on a unique form, as it's first told from the perspective of a dead matriarch and then by living members of her family.",
    },
    {
      id: 4,
      title: "Skippy Dies by Paul Murray",
      description:
        "The title spells out exactly what happens in the book, but just because we know the plot and the point of tension doesn't mean we can't be emotionally affected by the story and all the other things that stories do aside from the plot. This is one of those books that's written for teens but makes an impact on adults, too.",
    },
    {
      id: 5,
      title: "The Unbearable Lightness of Being by Milan Kundera",
      description:
        "At the crux of it, The Unbearable Lightness of Being by Milan Kundera is a philosophical story about love and fate. It explores the complexities of choice and how our decisions shape us and those around us. Exploring the personal lives of four very different individuals within the historic setting of Prague in the spring of 1968, Kundera challenges the reader to think about the interconnectedness between personal and public life.",
    },
    {
      id: 6,
      title: "Her Body & Other Parties by Carmen Maria Machado",
      description: "This collection of short  for example.",
    },
    {
      id: 7,
      title: "Brief Interviews with Hideous Men by David Foster Wallace",
      description:
        "This post-apocalyptic sci-fi fantasy story about what becomes of the world a century after a mass genocide lead by self-aware computers is as creepy and twisted as you'd expect it to be from the title. Interestingly, Harlan Ellison wrote the entire story in one night without editing the first draft, and it won the prestigious Hugo Award in 1968.",
    },
    {
      id: 8,
      title: "No One Belongs Here",
      description:
        "Moshfegh's words are often cutting and defeatist on the surface but liberating when you dig a little deeper, just like the sentiment behind the title. She has been described as the Flannery O'Connor of our time, so if you're drawn to Southern Gothic literature, you'll get along well with this collection of short stories.",
    },
    {
      id: 9,
      title: "Too Much and Not the Mood by Durga Chew-Bose",
      description:
        "Each section of this book is a color. It's a fascinating and quite successful way to rethink sensation, and in this case, pain. Especially when we don't have any other way to grasp onto it verbally, though we feel a need to let the pain cry out for a sense of relief. It's also fun to hear how a poet imagines the personalities of each color that we all have a relationship to. You'll never look at yellow (or whatever your favorite color is) the same way again.",
    },
  ];
  addToCart(event: any) {
    console.log(event.target.id);
  }
  constructor(private dataservice: DataService) {}

  ngOnInit(): void {}
}
