class Youtube {
  constructor(collected_women, collected_men) {
    this.now = new Date();
    // Get Week of Year
    const onejan = new Date(this.now.getFullYear(), 0, 1);
    this.weekNumber =
      Math.ceil(
        ((this.now.getTime() - onejan.getTime()) / 86400000 +
          onejan.getDay() +
          1) /
          7
      ) - 1;
    const start = new Date(this.now.getFullYear(), 0, 0);
    const diff =
      this.now -
      start +
      (start.getTimezoneOffset() - this.now.getTimezoneOffset()) * 60 * 1000;
    const oneDay = 1000 * 60 * 60 * 24;
    this.day = Math.floor(diff / oneDay);
    this.youtube_women = collected_women;
    this.youtube_men = collected_men;
  }

  async mostPopular(gender) {
    // console.log(`mostPopular: ${gender}`)
    let videos = gender === "women" ? this.youtube_women : this.youtube_men;

    let filteredResult = [];
    for (const video of videos) {
      const myDate = new Date(video["year-month-date"]);
      const dayInYear = Math.floor(
        (myDate - new Date(myDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
      );
      if (
        dayInYear >= this.day + 3 &&
        dayInYear <= this.day + 9 &&
        video.viewCount > 100000
      ) {
        filteredResult.push(video);
      }
    }
    return filteredResult;
  }

  async monthlyPopular(month) {
    let videos = this.youtube_women;

    let filteredResult = [];

    for (const video of videos) {
      const myDate = new Date(video["year-month-date"]);
      const myMonth = myDate.getMonth();

      // const dayInYear = Math.floor(
      //   (myDate - new Date(myDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
      // );
      if (
        myMonth ===
        month - 1
        // dayInYear >= this.day + 3 &&
        // dayInYear <= this.day + 9 &&
        // video.viewCount > 100000
      ) {
        filteredResult.push(video);
      }
    }
    return filteredResult;
  }

  async recent(gender) {
    let videos = gender === "women" ? this.youtube_women : this.youtube_men;
    let filteredResult = [];

    for (const video of videos) {
      const myDate = new Date(video["year-month-date"]);
      const dayInYear = Math.floor(
        (myDate - new Date(myDate.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
      );
      if (
        dayInYear >= this.day - 10 && //
        myDate.getFullYear() === this.now.getFullYear()
        // && video.viewCount > 100000
      ) {
        filteredResult.push(video);
      }
    }
    return filteredResult;
  }

  async search(keyword, month, gender) {
    let videos = gender === "women" ? this.youtube_women : this.youtube_men;
    let filteredResult = [];
    let searchResult = [];
    // console.log(month)

    for (const video of videos) {
      const title = video["title"];
      const createdMonth = video["year-month-date"].split("-")[1];
      // console.log(createdMonth)
      // console.log(title)
      if (
        title.search(keyword) >= 0 //
      ) {
        // console.log(title)
        searchResult.push(video);
        if (month === "") {
          if (video.viewCount > 100000) {
            filteredResult.push(video);
          }
        } else if (month === createdMonth) {
          filteredResult.push(video);
          // if (video.viewCount > 100000) {
          //   filteredResult.push(video);
          // }
        }
      }
    }
    return [searchResult, filteredResult];
  }
}

export default Youtube;
