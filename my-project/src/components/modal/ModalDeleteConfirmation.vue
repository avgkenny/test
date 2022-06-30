<template>
    <div class="modal" id="modalDeleteConfirmation" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">you sure to delete this text?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot name="body">
        </slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="dismiss()">Nope</button>
        <button type="button" class="btn btn-success" data-dismiss="modal" v-on:click="close()">Yes</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: "ModalDeleteConfirmation",
    props: {},
    data() {},
    methods: {
        close(){
            this.$emit('close', true);
        },
        dismiss(){
            this.$emit('close', false);
        }
    },
    mounted() {
    }
}
</script>
