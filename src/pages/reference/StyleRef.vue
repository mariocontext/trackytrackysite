<template>
  <Layout>
    <div>
      <BaseHeader screenTitle="Styling Reference" />
      <div class="system-container mt-16 mx-8">
        <div class="container">
          <header>
            <h1>Styling Reference</h1>
          </header>
          <h2 id="atoms">Atoms</h2>
          <section id="headers">
            <h3>Headers</h3>
            <div>
              <h1>Title h1</h1>
              <h2>Title h2</h2>
              <h3>Title h3</h3>
              <h4>Title h4</h4>
              <h5>Title h5</h5>
              <h6>Title h6</h6>
            </div>
          </section>
          <section id="typography">
            <h3>General typography</h3>
            <div>
              <div>
                <div>General body text</div>
              </div>
              <div>
                <em>Emphasis</em>
              </div>
              <div>
                <small>Small text</small>
              </div>
              <div>
                <strong>Strong text</strong>
              </div>
              <div>
                <u>Underline</u>
              </div>
              <div>
                <sub>Small subtext</sub>
              </div>
              <p>
                Paragraph Bob Ross - I was blessed with a very steady hand; and
                it comes in very handy when you're doing these little delicate
                things. Let's make some happy little clouds in our world. Very
                easy to work these to death. Maybe there's a happy little bush
                that lives right there. I can't think of anything more rewarding
                than being able to express yourself to others through painting.
              </p>
              <blockquote class="py-8">Blockquote text here!</blockquote>
              <div>
                <pre>
              <code>
                .my-special-color {
                    color: #F90;
                }
                </code>
            </pre>
              </div>
            </div>
          </section>
          <section id="lists">
            <h3>Lists</h3>
            <div>
              <h4>Unordered List</h4>
              <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
              <h4>Ordered List</h4>
              <ol class="list-decimal list-inside">
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ol>
              <h4>Definition List</h4>
              <dl>
                <dt>list item 1</dt>
                <dd>list item 1.1</dd>
              </dl>
            </div>
          </section>
          <section id="navigational">
            <h3>Navigational Elements</h3>
            <div>
              <a href="#navigational">Leads somewhere</a>
            </div>
            <div>
              <a href="#navigational" class="btn">Leads somewhere</a>
            </div>
            <div>
              <input class="btn" type="submit" value="Clear Button" />
            </div>
            <div>
              <button disabled>Some button Disabled</button>
            </div>
          </section>
          <section>
            <h3>Forms</h3>
            <div>
              <form>
                <fieldset>
                  <label for="nameField">Name</label>
                  <input type="text" placeholder="CJ Patoilo" id="nameField" />
                  <label for="ageRangeField">Age Range</label>
                  <select id="ageRangeField">
                    <option value="0-13">0-13</option>
                    <option value="14-17">14-17</option>
                    <option value="18-23">18-23</option>
                    <option value="24+">24+</option>
                  </select>

                  <div class="flex flex-row w-64 justify-around">
                    <div class="c-radio">
                      <input
                        class="sr-only"
                        type="radio"
                        id="huey"
                        name="drone"
                        value="huey"
                      />
                      <label class="c-radio__label" for="huey">Huey</label>
                    </div>

                    <div class="c-radio">
                      <input
                        class="sr-only"
                        type="radio"
                        id="dewey"
                        name="drone"
                        value="dewey"
                      />
                      <label class="c-radio__label" for="dewey">Dewey </label>
                    </div>

                    <div class="c-radio">
                      <input
                        class="sr-only"
                        type="radio"
                        id="louie"
                        name="drone"
                        value="louie"
                      />
                      <label class="c-radio__label" for="louie">Louie</label>
                    </div>
                  </div>

                  <label for="commentField">Comment</label>
                  <textarea placeholder="Hi CJ …" id="commentField"></textarea>

                  <!-- /* referenced from https://www.a11ymatters.com/pattern/checkbox/ */ -->
                  <div class="c-checkbox">
                    <input class="sr-only" id="confirmation" type="checkbox" />
                    <label class="c-checkbox__label" for="confirmation"
                      >Custom Checkbox</label
                    >
                  </div>

                  <div class="c-toggle">
                    <input class="sr-only" id="notifyme" type="checkbox" />
                    <label class="c-toggle__label" for="notifyme"
                      >Custom Toggle</label
                    >
                  </div>

                  <input
                    class="button-primary block mt-4"
                    type="submit"
                    value="Send"
                  />
                </fieldset>
              </form>
            </div>
          </section>

          <section>
            <h3>Tables</h3>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Height</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stephen Curry</td>
                    <td>27</td>
                    <td>1,91</td>
                    <td>Akron, OH</td>
                  </tr>
                  <tr>
                    <td>Klay Thompson</td>
                    <td>25</td>
                    <td>2,01</td>
                    <td>Los Angeles, CA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h3>Tabs</h3>
            <div class="c-tabs">
              <input
                class="sr-only tab-1"
                type="radio"
                id="forest"
                name="tabby"
                value="forest"
                checked
              />
              <label class="c-tab__label" for="forest">
                <span class="tab__trigger">Forest</span>
              </label>

              <input
                class="sr-only tab-2"
                type="radio"
                id="lake"
                name="tabby"
                value="lake"
              />
              <label class="c-tab__label" for="lake">
                <span class="tab__trigger">Lake</span>
              </label>

              <input
                class="sr-only tab-3"
                type="radio"
                id="balloon"
                name="tabby"
                value="balloon"
              />
              <label class="c-tab__label" for="balloon">
                <span class="tab__trigger">Balloon</span>
              </label>

              <div class="tab__content_area">
                <span class="tab__content content-1">
                  <p>Forest Content</p>
                  <g-image src="/images/forest.jpg" alt="Picture of Forest" />
                </span>
                <span class="tab__content content-2">
                  <p>Lake Content</p>
                  <g-image
                    src="/images/lake.jpg"
                    alt="Picture of man fishing on a Lake"
                  />
                </span>
                <span class="tab__content content-3">
                  <p>Balloon Content</p>
                  <g-image
                    src="/images/balloon.jpg"
                    alt="Picture of Balloon floating over foggy landscape"
                  />
                </span>
              </div>
            </div>
          </section>
          <section>
            <h3>Modal Example</h3>
            <label for="modal_1" class="button">Show modal</label>
            <input class="modal-trigger sr-only" id="modal_1" type="checkbox" />
            <div
              class="modal-container fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 hidden"
            >
              <div
                class="modal-content border-2 border-gray-500 p-4 rounded-lg mx-4 max-w-xl z-50 bg-white flex items-center justify-center relative"
              >
                <label
                  for="modal_1"
                  class="text-lg close absolute right-0 top-0 pr-4 cursor-pointer"
                  >X</label
                >
                <article>
                  <header class="relative">
                    <h3 class="mt-0 pt-0">Yeah!</h3>
                  </header>
                  <section
                    class="content h-48 overflow-y-auto border-t-2 border-b-2 mb-4"
                  >
                    <p>
                      Lorem ipsum dolor amet gastropub enamel pin yr biodiesel 3
                      wolf moon salvia. Banjo skateboard +1, single-origin
                      coffee bicycle rights normcore air plant 8-bit. Ramps jean
                      shorts glossier pop-up meditation, pinterest street art.
                      Flexitarian meditation hell of lomo, asymmetrical selvage
                      deep v squid put a bird on it hashtag typewriter kogi
                      hexagon readymade pok pok. PBR&B selfies green juice
                      narwhal bespoke pitchfork. Ramps drinking vinegar 3 wolf
                      moon gluten-free, celiac pork belly shaman wolf distillery
                      ennui pour-over roof party tumblr. Lo-fi swag franzen
                      shoreditch.
                    </p>

                    <p>
                      Vexillologist palo santo bushwick snackwave, iceland cloud
                      bread skateboard disrupt celiac. XOXO farm-to-table
                      activated charcoal pitchfork, lomo bushwick umami
                      lumbersexual aesthetic helvetica iceland biodiesel. Art
                      party shoreditch master cleanse, meggings helvetica viral
                      actually retro everyday carry poke. Yr kitsch brooklyn
                      jianbing wayfarers gastropub. Shaman fam shoreditch
                      cardigan. Hell of readymade succulents, direct trade
                      coloring book portland jean shorts microdosing migas irony
                      dreamcatcher palo santo artisan 90's. Kickstarter edison
                      bulb church-key enamel pin, succulents trust fund occupy
                      ramps poutine health goth ethical chicharrones green
                      juice.
                    </p>
                    <p>
                      Master cleanse authentic humblebrag vinyl. Roof party
                      polaroid four loko beard everyday carry lumbersexual
                      kinfolk flannel mustache semiotics blue bottle. Mixtape
                      master cleanse vinyl pabst, flannel tilde tousled hexagon
                      bushwick. Gochujang organic selvage, poke pug affogato you
                      probably haven't heard of them tumblr prism chartreuse meh
                      biodiesel. Mixtape tofu selvage food truck pickled fam
                      brunch tacos yr cardigan vice church-key waistcoat.
                    </p>
                    <p>
                      Lo-fi master cleanse chicharrones narwhal gochujang wolf
                      vinyl echo park bespoke trust fund sriracha church-key fam
                      neutra authentic. Cray irony letterpress, godard air plant
                      lomo actually bushwick distillery viral fingerstache.
                      Brooklyn authentic PBR&B food truck, viral semiotics hell
                      of blue bottle sriracha roof party celiac cloud bread
                      green juice narwhal pinterest. Thundercats pug organic
                      jean shorts microdosing lomo, kombucha air plant. PBR&B
                      skateboard polaroid, iceland la croix irony jean shorts
                      venmo godard etsy master cleanse plaid coloring book
                      yuccie actually.
                    </p>
                  </section>
                  <footer class="flex justify-between">
                    <button class="button" href="#">See offer</button>
                    <label for="modal_1" class="button font-normal py-8 px-4">
                      Cancel
                    </label>
                  </footer>
                </article>
              </div>
              <label
                for="modal_1"
                class="overlay fixed w-full h-full top-0 left-0 top-0 left-0 bg-gray-800 z-40 opacity-75"
              ></label>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Style Reference"
  }
};
</script>

<style scoped>
.system-container {
  @apply mt-16 mb-32;
}
.system-container > section {
  @apply mt-8 mb-4;
}
.system-container > section > h3 {
  @apply border-b-2 border-gray-600 mb-8;
}
</style>

