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
.system-container section {
  @apply mt-8 mb-4;
}
.system-container > section > h3 {
  @apply border-b-2 border-gray-600 mb-8;
}
</style>

