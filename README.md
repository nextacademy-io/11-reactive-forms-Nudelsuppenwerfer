# Angular Workshop: Reactive Forms

In this task, we'd like to create a form for adding a new clash.

---

### **1. Create the `ClashNewComponent`**

Create a `ClashNewComponent` with the following `html`:

```html
<form class="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
  <h2 class="text-2xl font-bold text-gray-700">Create a new Clash</h2>

  <div>
    <label class="block text-gray-600 font-medium">Title</label>
    <input type="text" name="title" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
  </div>

  <div>
    <label class="block text-gray-600 font-medium">Description</label>
    <textarea name="description" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required></textarea>
  </div>

  <div>
    <label class="block text-gray-600 font-medium">Date</label>
    <input type="date" name="date" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
  </div>

  <div>
    <label class="block text-gray-600 font-medium">Time</label>
    <input type="time" name="time" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
  </div>

  <div>
    <label class="block text-gray-600 font-medium">Location</label>
    <input type="text" name="location" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
  </div>

  <div>
    <label class="block text-gray-600 font-medium">Address</label>
    <input type="text" name="address" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
  </div>

  <div>
    <label class="block text-gray-600 font-medium">Event Image</label>
    <img src="https://via.placeholder.com/400" alt="Event" class="w-full rounded-lg mb-2" />
    <input type="url" name="pictureUrl" class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
  </div>

  <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Create Clash</button>
</form>
```

---

### **2. Add a `clashes/new` route**

In the `app.routes.ts`:

- The newly created `ClashNewComponent` should be configured for the path `clashes/new`.

Make sure, everything is working.

---

### **3. Add a secondary navigation for the `clashes` use-case.**

1. Add a secondary `<nav>` to the `clash.component.html`.
2. Add a link (`''`) to the (existing) list of clashes.
3. Add a link (`new`) to the `clashes/new` path.

Hint:
You can create a new component `ClashesNavbarComponent` if you like.

### **4. Add Reactive Forms functionality to your app**

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    /* other providers and modules..., */
    ReactiveFormsModule,
  ],
};
```

### **5. Add a `FormGroup` for your `ClashNewComponent`**

`clash-new.component.ts`:

```ts
  clashForm: FormGroup;

  fb = inject(FormBuilder);

  constructor() {
    this.clashForm = this.fb.group({
      foo: ['', Validators.required],
      /* implement me */
    });
  }

  onSubmit() {
    if (this.clashForm.valid) {
      console.log('Form Submitted', this.clashForm.value);
    }
  }
```

Make sure, you cover all fields of a clash. All fields are `Validators.required`.

### **6. Bind the `FormGroup` to the `<form>`**

`clash-new.component.html`:

```ts
<form
  [formGroup]="clashForm"
  (ngSubmit)="onSubmit()"
>
  <input formControlName="title" type="text" required />
  <button>Submit</button>
</form>
```

### **7. Implement the `onSubmit()` method**

Hint: Navigate back to the `/clashes` route when done.

```ts
router = inject(Router);

onSubmit() {
  // TODO: implement me

  this.router.navigate(['clashes']);
}
```
