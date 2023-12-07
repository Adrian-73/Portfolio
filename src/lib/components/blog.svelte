<script>
  import Card from "./card.svelte";

</script>
<div class="max-w-[761px] w-full h-[387px] px-2.5 py-5 bg-emerald-500 bg-opacity-30 rounded-[26px] flex-col justify-center items-center gap-2.5 inline-flex">
    <div class="max-w-[695px] w-full h-[326.02px] relative">
        <div class="max-w-[490px] w-full h-[29.73px] left-[95.50px] ">
            <div class="max-w-[200.15px] w-full h-[26.01px] left-[145px] top-0 absolute lg:text-2xl font-medium font-['Ubuntu']">Latest blog posts</div>
            <div class="max-w-[490.01px] w-full h-[0px] left-0 top-[26.01px] absolute border border-black"></div>
        </div>
        <Card></Card>
        <div class="w-[130.24px] h-[52.07px] left-[275.50px] top-[273.95px] absolute">
            <div class="w-[56.24px] h-[52.07px] left-[74px] top-0 absolute">
                <div class="w-[56.24px] h-[52.07px] left-0 top-0 absolute bg-sky-600 rounded-full"></div>
                <div class="w-[35.52px] h-[32.89px] left-[10.36px] top-[9.59px] absolute"></div>
            </div>
            <div class="origin-top-left rotate-180 w-[56.24px] h-[52.07px] left-[56.24px] top-0 absolute">
                <div class="w-[56.24px] h-[52.07px] left-0 top-0 absolute origin-top-left rotate-180 bg-cyan-100 bg-opacity-60 rounded-full"></div>
                <div class="w-[31.07px] h-[28.77px] left-[-12.09px] top-[12.26px] absolute origin-top-left rotate-180"></div>
            </div>
        </div>
    </div>
</div>